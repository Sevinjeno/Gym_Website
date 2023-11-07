import react, { useState } from "react";

let Registration = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  return (
    <>
    <div className="container">
               
                    <form>
                         <div>
                        <label>
                            First Name:
                            <input type="text" name="firstname" />
                        </label>
                        </div>
                        <div>
                        <label>
                            Last Name:
                            <input type="text" name="firstname" />
                        </label>
                        </div>
                        <div>
                        <label>
                            Email :
                            <input
                            type="text"
                            name="firstname"
                            //   value={formData.firstName}
                            //   onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        <div>
                        <label>
                            Phone Number :
                            <input
                            type="text"
                            name="firstname"
                            //   value={formData.firstName}
                            //   onChange={handleInputChange}
                            />
                        </label>
                        </div>
                </form>

    </div>
    
    </>
  );
};

export default Registration;
