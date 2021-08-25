using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace GlobalHistory.Models
{
    public partial class global_history2Context : DbContext
    {
        public global_history2Context()
        {
        }

        public global_history2Context(DbContextOptions<global_history2Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<PostComment> PostComments { get; set; }
        public virtual DbSet<PostTag> PostTags { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserView> UserViews { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-M7UHRSN\\SQLEXPRESS;Initial Catalog=global_history2;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Post>(entity =>
            {
                entity.ToTable("Post");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("Created_at");

                entity.Property(e => e.Img)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("img");

                entity.Property(e => e.Slug)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("Updated_at");

                entity.Property(e => e.UserId).HasColumnName("User_ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Posts)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Post_Post_comments");
            });

            modelBuilder.Entity<PostComment>(entity =>
            {
                entity.ToTable("Post_comments");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Comment)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.PostId).HasColumnName("Post_ID");

                entity.Property(e => e.UserId).HasColumnName("User_ID");

                entity.HasOne(d => d.Post)
                    .WithMany(p => p.PostComments)
                    .HasForeignKey(d => d.PostId)
                    .HasConstraintName("FK_Post_comments_Post");
            });

            modelBuilder.Entity<PostTag>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Post_Tag");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.PostId).HasColumnName("Post_ID");

                entity.Property(e => e.TagId).HasColumnName("Tag_ID");

                entity.HasOne(d => d.Post)
                    .WithMany()
                    .HasForeignKey(d => d.PostId)
                    .HasConstraintName("FK_Post_Tag_Post");

                entity.HasOne(d => d.PostNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.PostId)
                    .HasConstraintName("FK_Post_Tag_tags");
            });

            modelBuilder.Entity<Tag>(entity =>
            {
                entity.ToTable("tags");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("Created_at");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.UpdatedAT)
                    .HasColumnType("datetime")
                    .HasColumnName("Updated_aT");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("Created_at");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Password)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("Updated_at");
            });

            modelBuilder.Entity<UserView>(entity =>
            {
                entity.ToTable("User_view");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.PostId).HasColumnName("Post_ID");

                entity.Property(e => e.UserId).HasColumnName("User_ID");

                entity.HasOne(d => d.Post)
                    .WithMany(p => p.UserViews)
                    .HasForeignKey(d => d.PostId)
                    .HasConstraintName("FK_User_view_Post");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserViews)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_User_view_User");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
