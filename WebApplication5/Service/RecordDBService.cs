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
    public class RecordDBService
    {
        private readonly static string cnstr = ConfigurationManager.ConnectionStrings["PSY"].ConnectionString;
        private readonly SqlConnection conn = new SqlConnection(cnstr);
        //計算輔導紀錄編號
        public int LastArticleFinder()
        {
            // 宣告要回傳的值
            int A_Id;
            //Sql查詢語法
            string sql = $@" select top 1 * from Record order by A_Id desc";
            //確保程式不會因執行錯誤而整個中斷
            try
            {
                //開啟資料庫連線
                conn.Open();
                //執行Sql指令
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
                // 取得SQL資料
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                A_Id = Convert.ToInt32(dr["A_Id"]);
            }
            catch (Exception e)
            {
                //沒資料時Id為0
                A_Id = 0;
            }
            finally
            {
                conn.Close();
            }
            return A_Id + 1;
        }


        //藉由老師帳號，找出預約資料表輔導老師的所有狀態為4的學生
        //擋住重複學生帳號
        //-----------------------
        public List<Record> GetAllStudent(string Account)
        {
            //存放學生
            string Student=string.Empty;
            return null;
        }
        //將狀態為4時候，新增學生到輔導老師表管理
        public void InsertPSY_Student(string Account, Reservation reservationData)
        {
            string sql = $@"INSERT INTO Psycotherapy(Psy_Id,Sutdent_Id)  VALUES('{reservationData.Account}');";
        }
       

        //輔導紀錄資料藉由學生Account
        //根據學生Account
        public List<Record> GetAllDataList(string Account)
        {
            //宣告要回傳的搜尋資料為資料庫中的Article資料表
            List<Record> DataList = new List<Record>();
            //Sql語法
            string sql = $@"SELECT  Record.Account, Record.A_Id, Record.Title, Record.[Content], Record.CreateTime
                                    FROM      member INNER JOIN
                                    Record ON member.Account = Record.Account where Record.Account='{Account}';";
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
                    Record Data = new Record();
                    Data.A_Id = Convert.ToInt32(dr["A_Id"]);
                    Data.Title = dr["Title"].ToString();
                    Data.Account = dr["Account"].ToString();
                    Data.Content = dr["Content"].ToString();
                    Data.CreateTime = Convert.ToDateTime(dr["CreateTime"]);
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
        //取得藉由KeyinTeacher的Account 找老師電話
        public string GetTeacherPhone(string Account)
        {
            string Phone=string.Empty;
            string sql = $@"SELECT member.Phone
                                    FROM      Record INNER JOIN
                                    member ON Record.Account = member.Account where member.Account='{Account}';" ;
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                Phone = dr["Phone"].ToString();
            }
            catch(Exception e)
            {
                return Phone = null;
            }
            finally
            {
                conn.Close();
            }
            return Phone;
        }
        #region 查詢一筆資料
        //藉由紀錄編號取得單筆資料的方法
        public Record GetArticleDataById(int A_Id)
        {
            Record Data = new Record();
            //Sql語法

            string sql = $@" SELECT  Record.*FROM      Record where A_Id=' {A_Id}' ";
            //確保程式不會因執行錯誤而整個中斷
            try
            {
                //開啟資料庫連線
                conn.Open();
                //執行Sql指令
                SqlCommand cmd = new SqlCommand(sql, conn);
                //取得Sql資料
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read(); //獲得下一筆資料直到沒有資料
                Data.A_Id = Convert.ToInt32(dr["A_Id"]);
                Data.Account = dr["Account"].ToString();
                Data.CreateTime = Convert.ToDateTime(dr["CreateTime"]);
                Data.KeyinTeacher= dr["KeyinTeacher"].ToString();
                Data.Category = dr["Category"].ToString();
                Data.Title = dr["Title"].ToString();
                Data.Abstract = dr["Abstract"].ToString();
               

            }
            catch (Exception e)
            {
                //沒有資料傳回null
                Data = null;
            }
            finally
            {
                //關閉資料庫連線
                conn.Close();
            }
            //回傳根據編號所取得的資料
            return Data;
        }
        #endregion

        #region 查詢陣列資料
        //根據搜尋來取得資料陣列的方法
        public List<Record> GetDataList( string Account)
        {
            //宣告要接受全部搜尋資料的物件
            List<Record> DataList = new List<Record>();
            //Sql語法

                DataList = GetAllDataList( Account);
            
            return DataList;
        }
       


        #region 設定最大頁數方法
        //無搜尋值的設定最大頁數方法
        public void SetMaxPaging(  string Account)
        {
            //計算列數
            int Row = 0;
            //Sql語法
            string sql = $@" select * from Article where Account = '{Account}' ";
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
                    Row++;
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
            //計算所需的總頁數
            //Paging.MaxPage = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(Row) / Paging.ItemNum));
            //重新設定正確的頁數，避免有不正確值傳入
            //Paging.SetRightPage();
        }

        //有搜尋值的設定最大頁數方法
        public void SetMaxPaging(  string Search, string Account)
        {
            //計算列數
            int Row = 0;
            //Sql語法
            string sql = $@" select * from Article Where ( Title like '%{Search}%' or Content like '%{Search}%' ) and Account = '{Account}' ";
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
                    Row++;
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
            //計算所需的總頁數
            //Paging.MaxPage = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(Row) / Paging.ItemNum));
            //重新設定正確的頁數，避免有不正確值傳入
           // Paging.SetRightPage();
        }
        #endregion
        #endregion


        #region 新增輔導紀錄
        //新增資料方法
        //string Account  學生帳號
        public void InsertRecord(Record newData, string Account )
        {
            //取得最新一筆A_Id
            newData.A_Id = LastArticleFinder();
            //Sql新增語法
            //設定新增時間為現在
            // INSERT INTO Record(Account, A_Id, Title, Content, CreateTime) VALUES('jerry1005', '2', '林亭萱學生輔導紀錄', '輔導狀況良好', '2020-03-17 21:04:11.000');
            string sql = $@" INSERT INTO Record(A_Id,Account,CreateTime,KeyinTeacher,Category,Title,Content,Abstract)
                                      VALUES ('{newData.A_Id}',' {newData.Account}','{DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")}','{ Account }','{newData.Category}','{newData.Title}','{newData.Content}','{newData.Abstract}' ) ";
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


        #region 修改紀錄
        //修改紀錄
        public void UpdateArticle(int  A_Id,EditRecordViewModel UpdateData)
        {
            //Sql修改語法
            string sql = $@" update Record set Category='{UpdateData.Category}',Title='{UpdateData.Title}',Content = '{UpdateData.Content}',Abstract='{UpdateData.Abstract}' where A_Id = {A_Id} ";
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

        #region 刪除紀錄
        //刪除紀錄
        public void DeleteArticle(int A_Id)
        {
            //Sql語法
            //再根據文章Id取得要刪除的文章
            string sql= $@" Delete from Record where A_Id = {A_Id} ";
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

        #region 修改紀錄檢查
        //修改紀錄檢查判斷是否有這筆資料
        public Record CheckUpdate(int A_Id)
        {
            //根據Id取得要修改的資料
            Record Data = GetArticleDataById(A_Id);

            return Data;
        }
        #endregion

        #region 人氣查詢
        public List<Record> GetPopularList(string Account)
        {
            List<Record> popularList = new List<Record>();
            //查詢top5 watch
            string sql = $@" SELECT TOP 5 * FROM Article m inner join  Members d on m.Account = d.Account where m.Account = '{Account}' order by watch desc";
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
                    Record Data = new Record();
                    Data.A_Id = Convert.ToInt32(dr["A_Id"]);
                    Data.Account = dr["Account"].ToString();
                    Data.Title = dr["Title"].ToString();
                    Data.Content = dr["Content"].ToString();
                    Data.CreateTime = Convert.ToDateTime(dr["CreateTime"]);
                   // Data.Watch = Convert.ToInt32(dr["Watch"]);
                    //Data.Member.Name = dr["Name"].ToString();
                    popularList.Add(Data);
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
            return popularList;
        }
        #endregion


        #region 增加觀看人數
        public void AddWatch(int A_id)
        {
            string sql = $@" update Article set Watch = Watch + 1 where A_Id = '{A_id}' ";
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