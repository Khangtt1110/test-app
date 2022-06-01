import { useEffect, useState } from "react";

function Avatar() {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      //check avatar is not undefine will clean the URL
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePrevviewAvatar = (e) => {
    //Get first file chossen
    const file = e.target.files[0];
    //save this URL into props preview
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePrevviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
}

export default Avatar;
