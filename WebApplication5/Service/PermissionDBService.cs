using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebApplication5.Models;
using WebApplication5.ViewModel;

namespace WebApplication5.Service
{
    public class PermissionDBService
    {
        private readonly static string cnstr = ConfigurationManager.ConnectionStrings["PSY"].ConnectionString;
        private readonly SqlConnection conn = new SqlConnection(cnstr);

        //取得角色權限
        public string GetRole(string Account)
        {
            string sql = $@"SELECT  MemberRole.Account, MemberRole.Mark, Role.Role_Id, Permission.Permission_Id, Permission.Controller, Permission.Restful
                                    FROM      MemberRole INNER JOIN
                                    Role ON MemberRole.Role_Id = Role.Role_Id CROSS JOIN
                                    Permission where MemberRole.Account='{Account}' ;";
            //string sql = $@" select m.*,d.Name from (select row_number() over(order by A_Id) as sort,* from Article where (Title like '%{Search}%' or Content like '%{Search}%') and Account = '{Account}' ) m inner join Members d on m.Account = d.Account Where m.sort   ";
            //確保程式不會因執行錯誤而整個中斷
            string Role = string.Empty;
            try
            {
                //開啟資料庫連線
                conn.Open();
                //執行Sql指令
                SqlCommand cmd = new SqlCommand(sql, conn);
                //取得Sql資料
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                Role = dr["Role_Id"].ToString();

            }
            catch (Exception e)
            {
                //丟出錯誤
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                //關閉資料庫連線
                conn.Close();
            }
            //回傳搜尋資料
            return Role;
        }
        //搜尋權限資料
        public List<PermissionId> GetAllDataList(string Account)
        {
            //宣告要回傳的搜尋資料為資料庫中的Article資料表
            List<PermissionId> DataList = new List<PermissionId>();
            //Sql語法
            string sql = $@"SELECT  MemberRole.Account, MemberRole.Mark, Role.Role_Id, Permission.Permission_Id, Permission.Controller, Permission.Restful
                                    FROM      MemberRole INNER JOIN
                                    Role ON MemberRole.Role_Id = Role.Role_Id CROSS JOIN
                                    Permission where MemberRole.Account='{Account}' ;";
            //string sql = $@" select m.*,d.Name from (select row_number() over(order by A_Id) as sort,* from Article where (Title like '%{Search}%' or Content like '%{Search}%') and Account = '{Account}' ) m inner join Members d on m.Account = d.Account Where m.sort   ";
            //確保程式不會因執行錯誤而整個中斷
            try
            {
                //開啟資料庫連線
                conn.Open();
                //執行Sql指令
                SqlCommand cmd = new SqlCommand(sql, conn);
                //取得Sql資料
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read()) //獲得下一筆資料直到沒有資料
                {
                    PermissionId Data = new PermissionId();
                    Data.Permission_Id = dr["Permission_Id"].ToString();
                    //Data.Member.Name = dr["Name"].ToString();
                    DataList.Add(Data);
                }

            }
            catch (Exception e)
            {
                //丟出錯誤
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                //關閉資料庫連線
                conn.Close();
            }
            //回傳搜尋資料
            return DataList;
        }
        


        #region 
        //新曾權限
        public void InsertPemission(string Account,PermissionId newData)
        {

            //Sql新增語法
            //設定新增時間為現在

            string sql = $@" INSERT INTO MemberPermission(Account,Permission_Id)
                                      VALUES (' {Account}','{newData.Permission_Id}') ";
            //確保程式不會因執行錯誤而整個中斷
            try
            {
                //開啟資料庫連線
                conn.Open();
                //執行Sql指令
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                //丟出錯誤
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                //關閉資料庫連線
                conn.Close();
            }
        }
        #endregion

        #region 修改角色
        //修改文章方法
        public void UpdatePerssion(string Account ,PermissionIndexViewModel UpdateData)
        {
            //Sql修改語法
            string sql = $@" update MemberRole set Role_Id = '{UpdateData.Role_Id}' where Account =' {Account}' ";
            //確保程式不會因執行錯誤而整個中斷
            try
            {
                //開啟資料庫連線
                conn.Open();
                //執行Sql指令
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                //丟出錯誤
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                //關閉資料庫連線
                conn.Close();
            }
        }
        #endregion

        #region 刪除權限
        //刪除資料方法
        public void DeletePerssion(string Account)
        {

            string sql = $@" Delete from MemberPermission where Account = '{Account}' ";
            //確保程式不會因執行錯誤而整個中斷
            try
            {
                //開啟資料庫連線
                conn.Open();
                //執行Sql指令
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                //丟出錯誤
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                //關閉資料庫連線
                conn.Close();
            }
        }
        #endregion

    }
}