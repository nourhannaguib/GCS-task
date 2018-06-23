using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;
using WebAPI.Models.Managers;
using WebAPI.Models.Poco_Classes;

namespace WebAPI.Controllers
{
    public class instructorsController : ApiController
    {
        private InstructorManager im = new InstructorManager();
        private Model1 db = new Model1();

        // GET: api/instructors
        public List<PocoInstructor> Getinstructor()
        {
            var instructors = im.GetAllInstructors();
            return instructors.Select(a => new PocoInstructor
            {
                id = a.id,
                name = a.name,
                phone = a.phone,
                email = a.email,
                department = a.department,
                students = a.student_instructor.Select(p => p.student.name).ToList(),
                courses = a.instructor_course.Select(c => c.course.name).ToList(),
            }).ToList();
        }

        // GET: api/instructors/5
        [ResponseType(typeof(instructor))]
        public IHttpActionResult Getinstructor(int id)
        {
            instructor instructor = db.instructor.Find(id);
            if (instructor == null)
            {
                return NotFound();
            }

            return Ok(instructor);
        }

        // PUT: api/instructors/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putinstructor(int id, instructor instructor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != instructor.id)
            {
                return BadRequest();
            }

            db.Entry(instructor).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!instructorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/instructors
        [ResponseType(typeof(instructor))]
        public IHttpActionResult Postinstructor(instructor instructor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.instructor.Add(instructor);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = instructor.id }, instructor);
        }

        // DELETE: api/instructors/5
        [ResponseType(typeof(instructor))]
        public IHttpActionResult Deleteinstructor(int id)
        {
            instructor instructor = db.instructor.Find(id);
            if (instructor == null)
            {
                return NotFound();
            }

            db.instructor.Remove(instructor);
            db.SaveChanges();

            return Ok(instructor);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool instructorExists(int id)
        {
            return db.instructor.Count(e => e.id == id) > 0;
        }
    }
}