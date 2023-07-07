'use client'

export function ProfileForm({ user }: any) {//! ANY!!! Can this be refactored out?

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    }

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });

    await res.json();
  };

  return (<div>
    <h2>Edit Your Profile</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" defaultValue={user.name ?? ''} />

      <label htmlFor="bio">Bio</label>
      <textarea
        name="bio"
        cols={30}
        rows={10}
        defaultValue={user.bio ?? ''}
      ></textarea>

      <label htmlFor="age">Age</label>
      <input type="text" placeholder="99" name="age" id="age" defaultValue={user.age ?? '99'} />

      <label htmlFor="image">Profile Image URL</label>
      <input type="text" name="image" id="image" defaultValue={user.image ?? ''} />

      <button type="submit">Save</button>
    </form>
  </div>);
}