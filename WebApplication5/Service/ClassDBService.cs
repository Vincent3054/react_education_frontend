using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using WebApplication5.Models;

namespace WebApplication5.Service
{
    public class ClassDBService
    {
        private readonly static string cnstr = WebConfigurationManager.ConnectionStrings["PSY"].ConnectionString;
        private readonly SqlConnection conn = new SqlConnection(cnstr);

        public string GetGUID()
        {
            Guid Id = Guid.NewGuid();
            return Id.ToString();
        }



        //新增班級
        public void InsertClass(Class newData)
        {
            //string sql = $@" INSERT INTO Class(Class_Id,Grade,ClassName) VALUES ('{newData.Class_Id}','{newData.Grade.ToString("yyyy/MM.dd")}','{newData.ClassName}' )";
            string sql = $@" INSERT INTO Class(Class_Id,Grade,ClassName) VALUES ('{newData.Class_Id}','{newData.Grade}','{newData.ClassName}' )";
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

        public void  DeleteClass(string Class_Id)
        {
            string Delete1 = $@"DELETE  FROM Class WHERE  Class_Id='{Class_Id}'";
            string Delete2 = $@"DELETE  FROM MemberClass Where Class_Id='{Class_Id}';";
            string sql = Delete1 + Delete2;

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
        public void PutClass(Class UpData)
        {
            string sql = $@"UPDATE Class SET ClassName='{UpData.ClassName}',Grade='{UpData.Grade}',Teacher='{UpData.Name}' where Class_Id='{UpData.Class_Id}';";
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
        //列出班級裡面的所有學生
       public List<Class> Search(string Class_Id)
        {
            string sql = $@"SELECT  member.Account, member.Name, MemberClass.Class_Id, Class.Grade, Class.ClassName
                                    FROM      Class INNER JOIN
                                    MemberClass ON Class.Class_Id = MemberClass.Class_Id INNER JOIN
                                    member ON MemberClass.Account = member.Account WHERE Class.Class_Id='{Class_Id}';";
            List<Class> DataList = new List<Class>();
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    Class Data = new Class();
                    //GUID 轉 string Data.Id = dr["Id"].ToString();
                    Data.Class_Id = dr["Class_Id"].ToString();
                    Data.Grade = dr["Grade"].ToString();
                    Data.ClassName = dr["ClassName"].ToString();
                    Data.Name = dr["Name"].ToString();
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

        //管理員查看所有班級
        public List<ClassAll> SearchAll()
        {
            string sql = $@"SELECT  Class_Id, Grade, ClassName, Teacher FROM   Class;";
            List<ClassAll> DataList = new List<ClassAll>();
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    ClassAll Data = new ClassAll();
                    //GUID 轉 string Data.Id = dr["Id"].ToString();
                    Data.Class_Id = dr["Class_Id"].ToString();
                    Data.Grade = dr["Grade"].ToString();
                    Data.ClassName = dr["ClassName"].ToString();
                    Data.Teacher= dr["Teacher"].ToString();
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
        //查詢帳號中的班級

        public List<ClassTeacherAll> SearchAll(string Account)
        {
            string sql = $@"SELECT  member.Name, Class.Class_Id, Class.Grade,ClassName,Class.Teacher
FROM      member INNER JOIN
                   MemberClass ON member.Account = MemberClass.Account INNER JOIN
                   Class ON MemberClass.Class_Id = Class.Class_Id where Class.Teacher='{Account}';";
            List<ClassTeacherAll> DataList = new List<ClassTeacherAll>();
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    ClassTeacherAll Data = new ClassTeacherAll();
                    //GUID 轉 string Data.Id = dr["Id"].ToString();
                    Data.Class_Id = dr["Class_Id"].ToString();
                    Data.Grade = dr["Grade"].ToString();
                    Data.ClassName = dr["ClassName"].ToString();
                    Data.Name = dr["Name"].ToString();
                    Data.Teacher = dr["Teacher"].ToString();
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