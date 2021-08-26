﻿using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API.Models
{
    public partial class PostTag
    {
        public int Id { get; set; }
        public int? TagId { get; set; }
        public int? PostId { get; set; }

        public virtual Post Post { get; set; }
        public virtual Tag Tag { get; set; }
    }
}
