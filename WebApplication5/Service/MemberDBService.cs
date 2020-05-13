using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Configuration;
using WebApplication5.Models;
using WebApplication5.ViewModel;

namespace WebApplication5.Service
{
    public class MemberDBService
    {
        private readonly static string cnstr =WebConfigurationManager.ConnectionStrings["PSY"].ConnectionString;
        private readonly SqlConnection conn = new SqlConnection(cnstr);
        #region
        public void Register_RoleTale(Member newMember)
        {
            //判斷註冊者是學生or老師
            //學生
            string student = "R004";
            string PSYTeacher = "R003";
            string Teacher = "R002";
            //新增學生註冊班級資料
            if (newMember.Role_Id == student)
            {
                Register_Class(newMember);

            }
            //班級導師
            else if (newMember.Role_Id == Teacher)
            {
                Register_Teacher(newMember);
            }
            else if (newMember.Role_Id == PSYTeacher)
            {
                Register_PSYTeacher(newMember);
            }
        }
        public void Register(Member newMember)
        {
            //產生member_Id
            newMember.Member_Id = GetGUID();
            newMember.Password = HashPassword(newMember.Password);
            string sql = $@"INSERT INTO member  values('{newMember.Member_Id}','{newMember.Account}','{newMember.Name}','{newMember.Email}','{newMember.Password}','{newMember.AuthCode}','{newMember.Phone}','{newMember.Sex}')";
           
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
        }
        //註冊的學生班級資料存入
        public void Register_Class (Member Data)
        {
            string sql = $@"INSERT INTO MemberClass  values('{Data.Account}','{Data.Class_Id}')";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
        }

        //註冊的老師班級資料更新到班級上面
        public void Register_Teacher(Member Data)
        {

            string sql = $@"UPDATE Class SET Teacher = '{Data.Account}' where Class_Id = '{Data.Class_Id}'";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
        }
        //註冊的輔導老師資料存入Psycotherapy
        public void Register_PSYTeacher(Member Data)
        {
            string sql = $@"INSERT INTO Psycotherapy  values('{Data.Account}','{null}')";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
        }
        //加密
        public string HashPassword(string Password)
        {
            string saltkey = "c8c8c8c8c8c8c8c8c8";
            string saltAndPassword = String.Concat(Password, saltkey);
            SHA256CryptoServiceProvider sha256Hasher = new SHA256CryptoServiceProvider();
            byte[] PasswordData = Encoding.Default.GetBytes(saltAndPassword);
            byte[] HashData = sha256Hasher.ComputeHash(PasswordData);
            string Hashresult = Convert.ToBase64String(HashData);
            return Hashresult;

        }
         
        //寄信驗證
        public string EmailValidate(string Account,string AuthCode)
        {
            Member ValidateMember = GetDataByAccount(Account);
            string ValidateStr = string.Empty;
            if (ValidateMember != null)
            {
                //判斷傳入驗證碼與資料庫中是否相同
                if (ValidateMember.AuthCode == AuthCode)
                {
                    string sql = $@" update member set AuthCode = '{string.Empty}' where Account = '{Account}' ";
                    try
                    {
                        conn.Open();
                        SqlCommand cmd = new SqlCommand(sql, conn);
                        cmd.ExecuteNonQuery();
                    }
                    catch (Exception e)
                    {
                        throw new Exception(e.Message.ToString());
                    }
                    finally
                    {
                        conn.Close();
                    }
                    ValidateStr = "帳號信箱驗證成功，現在可以登入了";
                }
                else
                {
                    ValidateStr = "驗證碼錯誤，請重新確認或再註冊";
                }
            }
            else
            {
                ValidateStr = "傳送資料錯誤，請重新確認或再註冊";
            }
            //回傳驗證訊息
            return ValidateStr;
        }
        //找出Role_Id
        public string GetRole_Id(string Account)
        {
            string Role_Id = string.Empty;
            string sql = $@"SELECT  member.*, MemberRole.Role_Id
                                    FROM      member INNER JOIN
                                    MemberRole ON member.Account = MemberRole.Account where member.Account='{Account}' ;";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();

               Role_Id = dr["Role_Id"].ToString();
            }
            catch (Exception e)
            {
                Role_Id= null;
            }
            finally
            {
                conn.Close();
            }
            return Role_Id;
        }

        //藉由帳號取得單筆資料
        public Member GetDataByAccount(string Account)
        {
            Member Data = new Member();
            string sql = $@"SELECT  member.*, MemberRole.Role_Id
                                    FROM      member INNER JOIN
                                    MemberRole ON member.Account = MemberRole.Account where member.Account='{Account}' ;";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                Data.Member_Id = dr["Member_Id"].ToString();
                Data.Account = dr["Account"].ToString();
                Data.Name = dr["Name"].ToString();
                Data.Email = dr["Email"].ToString();
                Data.Password = dr["Password"].ToString();
                Data.AuthCode = dr["AuthCode"].ToString();
                Data.Role_Id = dr["Role_Id"].ToString();
                Data.Phone = dr["Phone"].ToString();
            }
            catch(Exception e)
            {
                Data = null;
            }
            finally
            {
                conn.Close();
            }
            return Data;
        }
        //學生藉由帳號取得個人班級
        public Class GetClassByAccount(string Account)
        {
            Class Data = new Class();
            string sql = $@"SELECT  MemberClass.Account, Class.Class_Id, Class.Grade, Class.ClassName, Class.Teacher
                    FROM      Class INNER JOIN
                   MemberClass ON Class.Class_Id = MemberClass.Class_Id where MemberClass.Account='{Account}' ;";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                Data.Class_Id= dr["Class_Id"].ToString();
                Data.Grade= dr["Grade"].ToString();
                Data.ClassName= dr["ClassName"].ToString();
            }
            catch (Exception e)
            {
                Data = null;
            }
            finally
            {
                conn.Close();
            }
            return Data;
        }
        public bool LoginCheck(string Account ,string Password)
        { 
            //0414
            //取得傳入帳號的會員資料
            Member LoginMember = GetDataByAccount(Account);
            //判斷是否有此會員
            if (LoginMember != null)
            {
                //判斷是否有經過信箱驗證，有經驗證驗證碼欄位會被清空
                if (string.IsNullOrWhiteSpace(LoginMember.AuthCode))
                {
                    //進行帳號密碼確認
                    if (PasswordCheck(LoginMember, Password))
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        public string ChangePassword(string Account,ChangePasswordViewModels Data)
        {
            string ErrorMessage;
            Member LoginMember = GetDataByAccount(Account);
            if (PasswordCheck(LoginMember, Data.Password))
            {
                LoginMember.Password = HashPassword(Data.NewPassword);
                string sql =$@"Update member set Password='{LoginMember.Password}' WHERE Account ='{Account}'";
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
                ErrorMessage="密碼修改成功";
                return ErrorMessage;
            }
            else
            {
                ErrorMessage = "密碼不正確";
                return ErrorMessage;
            }
        }
        #endregion
        //確認密碼正確boolean
        public  bool PasswordCheck(Member CheckMember,string Password)
        {
            bool result = CheckMember.Password.Equals(HashPassword(Password));
            return result;

        }
        //忘記密碼
        public bool ForgetPasswordCheck(string Account,string AuthCode)
        {
            Member Data = GetDataByAccount(Account);
            //確認驗證狀態
            bool result = (Data != null );
            if (result)
            {
                string sql = $@"UPDATE member set AuthCode='{AuthCode}' WHERE Account='{Account}';";
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
            return result;
        }
        //重複註冊判斷
        public bool AccountCheck(string Account)
        {
            //取得此帳號資料
            Member Data = GetDataByAccount(Account);
            //判斷此帳號是否已有資料
            return (Data == null);
        }

        //重設密碼
        public string ResetPassword(string Account, string AuthCode, string NewPassword)
        {
            NewPassword = HashPassword(NewPassword);
            Member Data = GetDataByAccount(Account);
            if (AuthCode == Data.AuthCode)
            {
                string UpdateUsers = $@"update member set Password = '{NewPassword}' where Account = '{Account}';";
                string UpdateMembers = $@"update member set AuthCode = '{string.Empty}' where Account = '{Account}';";
                string sql = UpdateUsers + UpdateMembers;
                try
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand(sql, conn);
                    cmd.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    throw new Exception(e.Message.ToString());
                }
                finally
                {
                    conn.Close();
                }
                return null;
            }
            return "驗證碼錯誤，請重新確認";
        }
        //登入將角色寫入


        //取得判斷Role角色

        public void InstrRole(Member newData)
        {
             string Mark = string.Empty;
           
            if(newData.Role_Id=="R002")
            {
                Mark = "班級導師";
            }
            else if(newData.Role_Id == "R003")
            {
                Mark = "輔導老師";
            }
            else if (newData.Role_Id == "R004")
            {
                Mark = "學生";
            }
            string sql = $@" INSERT INTO MemberRole (Account,Role_Id,Mark) VALUES ('{newData.Account}','{newData.Role_Id}','{Mark}')";

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
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
        //取得最大筆數
        public int SetMaxRow(string Role_Id)
        {
            //計算列數
            int Row = 0;
            //Sql語法
            string sql =$@"SELECT Role.Role, RolePermission.Role_Id, Permission.Permission_Id, Permission.Controller, Permission.Restful
                   FROM      Role INNER JOIN
                  RolePermission ON Role.Role_Id = RolePermission.Role_Id INNER JOIN
                   Permission ON RolePermission.Permission_Id = Permission.Permission_Id where Role.Role_Id = '{Role_Id}'; ";
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
            return Row;
        }

            // 取得登入的角色權限
            public string GetRole(string Account,string Role_Id)
        {
            
            //取得傳入帳號的會員資料
            Member LoginMember = GetDataByAccount(Account);
            int Row = SetMaxRow(LoginMember.Role_Id);
            //判斷資料庫欄位，用以確認是否為Admin
            //判斷角色

            //--------------------------------------------------------------------------
          string Route =string.Empty;
            int i;
         //string sql = $@"SELECT * FROM member m inner join  MemberRole d on m.Account = d.Account where m.Account ='{Account}';";

         string sql = $@"SELECT  Role.Role, RolePermission.Role_Id, Permission.Permission_Id, Permission.Controller, Permission.Restful
                    FROM      Role INNER JOIN
                   RolePermission ON Role.Role_Id = RolePermission.Role_Id INNER JOIN
                   Permission ON RolePermission.Permission_Id = Permission.Permission_Id where Role.Role_Id='{LoginMember.Role_Id}';";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                for (i = 0; i <= Row; i++)
                {
                    dr.Read();
                    Route = Route + dr["Permission_Id"].ToString() + ",";
                }
            }
            catch (Exception e)
            {
                Row = 0;
            }
            finally
            {
                conn.Close();
            }
            //回傳最後結果
            return Route;
        }
        /*
         *         public string GetRole(string Account)
        {

            //取得傳入帳號的會員資料
            Member LoginMember = GetDataByAccount(Account);
            //判斷資料庫欄位，用以確認是否為Admin
            //判斷角色

            //--------------------------------------------------------------------------
         string Permission;
         string sql = $@"SELECT * FROM member m inner join  MemberRole d on m.Account = d.Account where m.Account ='{Account}';";


            try
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand(sql, conn);
            SqlDataReader dr = cmd.ExecuteReader();
            dr.Read();
            Role = dr["Role_Id"].ToString();
        }
        catch(Exception e)
        {
            throw new Exception(e.Message.ToString());
        }
            //回傳最後結果
            return Role;
        }
         */

        //test
        #region 
        //產生GUID
        public string GetGUID()
        {
            Guid Id = Guid.NewGuid();
            return Id.ToString();
        }

        //新增資料
        public void  InsertData(Member newData)
        {
            string sql = $@" INSERT INTO Member(Account,Name,Email,Password,AuthCode) VALUES ('{newData.Account}','{newData.Name}','{newData.Email}','{newData.Password}','{newData.AuthCode}' )";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
        }
        //查詢
        public Member ReadData(string Account)
        {
            Member Data = new Member();
            string sql = $@" select * from member where Account ='{Account}'";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                //讀資料出來
                dr.Read();
                //GUID 轉 string Data.Id = dr["Id"].ToString();
                Data.Name = dr["Name"].ToString();
                Data.Email = dr["Email"].ToString();
                Data. Account= dr["Account"].ToString();
            }
            catch (Exception e)
            {
                Data = null;
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
            return Data; 
        }

        /*
        //查詢
        public Member ReadData(string  Account)
        {
            Member Data = new Member();
            string sql = $@" select * from Member  where Account = {Account} ";
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                Data.Account = dr["Account"].ToString();
                Data.Name = dr["Content"].ToString();
                Data.Email = dr["Email"].ToString();
            }
            catch (Exception e)
            {
                Data = null;
            }
            finally
            {
                conn.Close();
            }
            return Data;
        }
        */


        //修改
        public void UpdateData(Member UpData)
        {
            string sql = $@"UPDATE Member SET Name='{UpData.Name}',Email='{UpData.Email}' where Account='{UpData.Account}'";
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

        //刪除
        public void  DeleteData(string Account)
        {
            string sql = $@"Delete from Member WHERE Account='{Account}'";
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

        #endregion
    }
}