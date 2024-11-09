{

    interface Profile{
        name : string,
        age: number,
        email: string
      }
    
    type ProfilePartial = Partial<Profile>
    
    
      function updateProfile(profile: Profile, updateProfile: ProfilePartial ): Profile {
       return {...profile, ...updateProfile}
    
      }
    
    
      const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
      console.log(updateProfile(myProfile, { age: 26 }));
}