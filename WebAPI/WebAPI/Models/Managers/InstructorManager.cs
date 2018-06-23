using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.Managers
{
    public class InstructorManager
    {
        Model1 ctx;
        public InstructorManager()
        {
            ctx = new Model1();
        }
        public List<instructor> GetAllInstructors()
        {
            return ctx.instructor.ToList();
        }
        public int Remove(int id)
        {
            instructor i = ctx.instructor.FirstOrDefault(ins => ins.id == id);
            ctx.instructor.Remove(i);
            return ctx.SaveChanges();
        }
    }

}