using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using WebApplication5.Models;

namespace WebApplication5.Service
{
    public class StudentsDBService
    {
        private readonly static string cnstr = WebConfigurationManager.ConnectionStrings["PSY"].ConnectionString;
        private readonly SqlConnection conn = new SqlConnection(cnstr);


        public List<Student> Search(string Account)
        {
            string sql = $@"SELECT  member.Account, member.Name, MemberClass.Class_Id, Class.Grade, Class.ClassName
                                    FROM      Class INNER JOIN
                                    MemberClass ON Class.Class_Id = MemberClass.Class_Id INNER JOIN
                                    member ON MemberClass.Account = member.Account WHERE Class.Class_Id='{Account}';";
            List<Student> DataList = new List<Student>();
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    Student Data = new Student();
                    //GUID 轉 string Data.Id = dr["Id"].ToString();
                    Data.Name = dr["Name"].ToString();
                    Data.Class_Id = dr["Class_Id"].ToString();
                    Data.ClassName = dr["ClassName"].ToString();
                    DataList.Add(Data);
                }

            }
            catch (Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
            return DataList;
        }

        //取得班導帳號關聯的班級
        public List<Student> ClassName(string Account)
        {
            string sql = $@"SELECT  member.Account, member.Name, MemberClass.Class_Id, Class.Grade, Class.ClassName
                                    FROM      Class INNER JOIN
                                    MemberClass ON Class.Class_Id = MemberClass.Class_Id INNER JOIN
                                    member ON MemberClass.Account = member.Account WHERE Class.Class_Id='{ Account}';";
            List<Student> DataList = new List<Student>();
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    Student Data = new Student();
                    //GUID 轉 string Data.Id = dr["Id"].ToString();
                    Data.Name = dr["Name"].ToString();
                    Data.Class_Id = dr["Class_Id"].ToString();
                    Data.ClassName = dr["ClassName"].ToString();
                    DataList.Add(Data);
                }

            }
            catch (Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
            finally
            {
                conn.Close();
            }
            return DataList;
        }
    }
}