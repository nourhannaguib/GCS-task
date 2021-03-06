﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.Poco_Classes
{
    public class PocoInstructor
    {
        public int id { get; set; }
        public string name { get; set; }
        public int? phone { get; set; }
        public string email { get; set; }
        public string department { get; set; }
        public List<string> students { get; set; }
        public List<string> courses { get; set; }
    }
}