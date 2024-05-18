
const User = ({ user }) => {

    const { avatar_url, followers, bio, following, location, public_repos, name, login, created_at } = user;

    const createdDate = new Date(created_at);

    return (
        <div className="user">

            <div className="relative left-[40%] top-[-2vw] w-[30vw] h-[86vh] bg-gray-200 rounded-lg overflow-hidden">
                <div className="bg-[#015899] w-full h-[40%]">
                    <img className="absolute top-5 left-16 rounded-full w-[20vw] h-[20vw] object-cover" src={avatar_url} alt="" />
                </div>

                <div className="absolute top-[49%] left-[33%] text-[4vw] font-semibold">
                    <a href={`https://github.com/${login}`}>{name || login}</a>

                </div>

                <div className="absolute top-[62%] text-[20px] left-[22%]">
                    <h5>{bio}</h5>
                </div>


                <div className="w-full flex absolute top-[69%]">
                <div>
                        <h6 className="ml-[230%]">{location}</h6>
                    </div>
                    <div className="ml-[38%]">
                        <h4>joined - {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
                            month: 'short'
                        })}  ${createdDate.getFullYear()}`}</h4>
                    </div>

                    
                </div>

                <div className=" border-t-2 border-black h-[17vh] text-center w-full justify-around flex absolute bottom-0">
                    <div>
                        <h5 className="text-[3.5vw]">{following}</h5>
                        <p className="text-[20px]">Following </p>
                    </div>
                    <div>
                        <h5 className="text-[3.5vw]">{followers}</h5>
                        <p className="text-[20px]">
                            Followers
                        </p>
                    </div>
                    <div>
                        <h5 className="text-[3.5vw]">{public_repos}</h5>
                        <p className="text-[20px]">Public Repo </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default User