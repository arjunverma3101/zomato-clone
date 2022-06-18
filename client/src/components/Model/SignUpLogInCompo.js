import React from "react";

function SignUpLogInCompo(props) {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }

    return (
        <>
            <div class={`flex flex-col gap-1 border-2 py-3 rounded-full border-gray-500 my-4`}>
                <button type="button" className="flex gap-4 justify-center items-center font-bold text-xl" onClick={google}>
                    <img className="w-8" src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" />
                    Continue with Google
                </button>
            </div>
            <div class={`flex flex-col gap-1 ${props.isTrue ? "" : "hidden"}`}>
                <label for="__fullName" className="text-lg text-green-800 font-bold">Full Name</label>
                <input type="text" className="px-4 py-2 outline-blue-300 italic " id="__fullName" placeholder="Full Name" required />
            </div>
            <div class="flex flex-col gap-1">
                <label for="__email" className="text-lg text-green-800 font-bold">Email address</label>
                <input type="email" className="px-4 py-2 outline-blue-300 italic" id="__email" placeholder="Email" required />
            </div>
            <div class={`flex flex-col gap-1 ${props.isTrue ? "" : "hidden"}`}>
                <label for="__phoneNumber" className="text-lg text-green-800 font-bold">Phone Number</label>
                <input type="tel" pattern="[7-9]{1}[0-9]{9}" className="px-4 py-2 outline-blue-300 italic" id="__phoneNumber" placeholder="Phone Number" required />
            </div>
            <div class="flex flex-col gap-1">
                <label for="__password" className="text-lg text-green-800 font-bold">Password</label>
                <input type="text" className="px-4 py-2 outline-blue-300 italic" id="__password" placeholder="Password" required />
            </div>
            <div class={`flex flex-col gap-1 ${props.isTrue ? "" : "hidden"}`}>
                <label for="__profilePic" className="text-lg text-green-800 font-bold">Profile Pic</label>
                <input type="file" className="px-4 py-2 outline-blue-300 italic" id="__profilePic" required />
            </div>
        </>
    )
}
export default SignUpLogInCompo;