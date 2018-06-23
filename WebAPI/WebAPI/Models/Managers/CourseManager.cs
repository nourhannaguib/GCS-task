using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.Managers
{
    public class CourseManager
    {
        Model1 ctx;
        public CourseManager()
        {
            ctx = new Model1();
        }
        public List<course> GetAllCourses()
        {
            return ctx.course.ToList();
        }
        public int Remove(int id)
        {
            course c = ctx.course.FirstOrDefault(co => co.id == id);
            ctx.course.Remove(c);
            return ctx.SaveChanges();
        }
    }
}