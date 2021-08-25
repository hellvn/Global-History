﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Global_History.Models
{
    public partial class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAT { get; set; }
    }
}
