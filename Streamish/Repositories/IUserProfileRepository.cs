using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        public List<UserProfile> GetAllWithVideos();
        public UserProfile GetUserByIdWithVideos(int id);
        UserProfile GetById(int id);
        void Update(UserProfile userProfile);
    }
}