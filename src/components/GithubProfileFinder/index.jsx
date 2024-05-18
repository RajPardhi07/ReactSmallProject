import { useEffect, useState } from "react"
import User from "./User"

const index = () => {


    const [userName, setUserName] = useState('rajpardhi07')
    const [userData, setUserData] = useState(null)


    const fetchGithubUserData = async () => {
        const res = await fetch(`https://api/github.com/users/${userName}`)

        const data = await res.json();
        // console.log(data)

        if (data) {
            setUserData(data)
            setUserName('')
        }
    }


    const submithandle = () => {

        fetchGithubUserData()
    }


    useEffect(() => {
        fetchGithubUserData()
    }, [])



    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input type="text" name="search-by-username"
                    placeholder="Search Github Username..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-80 h-10 border border-black"
                />

                <button className="ml-3 rounded-md w-20 h-10 bg-black text-white" onClick={submithandle}>Search</button>

            </div>

            {
                userData !== null ? <User user={userData} /> : null
            }


        </div>
    )
}

export default index