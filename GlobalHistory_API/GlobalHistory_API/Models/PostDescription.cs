using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory_API.Models
{
    public partial class PostDescription
    {
        public int Id { get; set; }
        public int? PostId { get; set; }
        public string Description { get; set; }

        public virtual Post Post { get; set; }
    }
}
