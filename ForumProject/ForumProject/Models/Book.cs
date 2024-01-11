using System.ComponentModel.DataAnnotations;

namespace ForumProject.Models
{
    public class Book
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public Authors Author { get; set; }
    }
    public enum Authors
    {
        Bob =1,
        Hohn =2,
        Frank =3,
        Jims =4,
    }
}
