using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.Managers
{
    public class StudentManager
    {
        Model1 ctx;
        public StudentManager()
        {
            ctx = new Model1();
        }
        public List<student> GetAllStudents()
        {
            return ctx.student.ToList();
        }
        public int Remove(int id)
        {
            student s = ctx.student.FirstOrDefault(st => st.id == id);
            ctx.student.Remove(s);
            return ctx.SaveChanges();
        }
    }
}