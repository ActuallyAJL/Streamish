using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        public List<Video> GetAllWithComments();
        public Video GetVideoByIdWithComments(int id);
        Video GetById(int id);
        void Update(Video video);
    }
}