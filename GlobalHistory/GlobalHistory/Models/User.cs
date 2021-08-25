using System;
using System.Collections.Generic;

#nullable disable

namespace GlobalHistory.Models
{
    public partial class User
    {
        public User()
        {
            UserViews = new HashSet<UserView>();
        }

        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual ICollection<UserView> UserViews { get; set; }
    }
}
