using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebApplication5.Models;

namespace WebApplication5.Service
{
    public class ReservationDBService
    {
        //預約紀錄表
        private readonly static string cnstr = ConfigurationManager.ConnectionStrings["PSY"].ConnectionString;
        private readonly SqlConnection conn = new SqlConnection(cnstr);

        //前端學生預約表單傳進來資料
        public void InsertReservation(Reservation newData)
        {
            //取得最新一筆A_Id
            newData.Reservation_Id = LastArticleFinder();
            //Sql新增語法
            //設定新增時間為現在
            
            string sql = $@" INSERT INTO Reservation(Reservation_Id,Class_Id,Account,Period,Time,Date,NowPSY,BeforePSY,Fettle,TeacherRemarks,StudentsRemarks)
                                      VALUES (' {newData.Reservation_Id}','{newData.Class_Id}','{newData.Account}','{newData.Period}','{newData.Time}','{DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")}','{newData.NowPSY}','{newData.BeforePSY}' ,'{newData.Fettle}','{newData.TeacherRemarks}','{newData.StudentsRemarks}') ";
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
        //管理者指派輔導老師
        public void InsertPSY(int Reservation_Id,Reservation UpData)
        {
            UpData.CheckCancel = null;
            string sql = $@"UPDATE Reservation SET CheckCancel='{UpData.CheckCancel}',NowPSY= '{UpData.NowPSY}',Fettle = '{UpData.Fettle}' where Reservation_Id = '{Reservation_Id}';";
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
        //查詢預約紀錄
        public Reservation GetReservation(int Reservation_Id)
        {
            Reservation Data = new Reservation();
            string sql = $@"SELECT *FROM Reservation where Reservation_Id='{Reservation_Id}';";
            try
            {
                //開啟資料庫連線
                conn.Open();
                //執行Sql指令
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                Data.Class_Id = dr["Class_Id"].ToString();
                Data.Account = dr["Account"].ToString();
                //      Data.M_Id = Convert.ToInt32(dr["M_Id"]);
                Data.Reservation_Id =Convert.ToInt32(dr["Reservation_Id"]);
                //Data.CreateTime = Convert.ToDateTime(dr["CreateTime"]);
                Data.Period =dr["Period"].ToString();
                Data.Time = dr["Time"].ToString();
                Data.Date= Convert.ToDateTime(dr["Date"]);
                Data.NowPSY = dr["NowPSY"].ToString();
                Data.BeforePSY = dr["BeforePSY"].ToString();
                Data.Fettle = Convert.ToInt32( dr["Fettle"]);
                Data.TeacherRemarks = dr["TeacherRemarks"].ToString();
                Data.StudentsRemarks = dr["StudentsRemarks"].ToString();
                Data.CheckCancel = dr["CheckCancel"].ToString();

            }
            catch (Exception e)
            {
                //丟出錯誤
                Data = null;
            }
            finally
            {
                //關閉資料庫連線
                conn.Close();
            }
            return Data;
        }
        //更新狀態碼
        public void UpFettle(int Fettle,int Reservation_Id) 
        { 
         string sql = $@"UPDATE Reservation SET Fettle = '{Fettle}' where Reservation_Id = '{Reservation_Id}';";
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

        //輔導老師確定接受指派，填寫備註
        public void PSYCheck(int Reservation_Id, Reservation UpData)
        {
            string sql = $@"UPDATE Reservation SET CheckCancel= '{UpData.CheckCancel}',Fettle = '{UpData.Fettle}' where Reservation_Id = '{Reservation_Id}';";
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
        //退回管理者指派
        //輔導老師確定接受指派，填寫備註
        public void PSYCancel(int Reservation_Id, Reservation UpData)
        {
            //退回指派清空老師在預約的欄位
            UpData.NowPSY =string.Empty;
            string sql = $@"UPDATE Reservation SET NowPSY= '{UpData.NowPSY}',Fettle = '{UpData.Fettle}' ,TeacherRemarks='{UpData.TeacherRemarks}'where Reservation_Id = '{Reservation_Id}';";
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
        //新增輔導老師要不要取消
        public void InsertCancle(int  Reservation_Id,Reservation Data)
        {
            string sql = $@" UPDATE Reservation SET CheckCancel='{Data.CheckCancel}'where Reservation_Id='{Reservation_Id}';";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch(Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
        }
        #region 計算目前文章最新一筆的A_Id
        public int LastArticleFinder()
        {
            // 宣告要回傳的值
            int Reservation_Id;
            //Sql查詢語法
            string sql = $@" select top 1 * from Reservation order by Reservation_Id desc";
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
                Reservation_Id = Convert.ToInt32(dr["Reservation_Id"]);
            }
            catch (Exception e)
            {
                //沒資料時Id為0
                Reservation_Id = 0;
            }
            finally
            {
                conn.Close();
            }
            return Reservation_Id + 1;
        }
        #endregion

        //找學生資料

    }
}