import { toast } from 'sonner'
import Topsection from './components/Topsection'
import ProfileSettings from './ProfileSettings'

function Settings() {


  const handleDeleteAccount = async () => {
    const res = await DELETEUSER();
    if (res.status === 200) {
      toast.success("Account Deleted Successfully")
      window.location.href = "/"
      localStorage.clear();
    }
  }


  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <Topsection title={"Settings"} />
        <ProfileSettings />
        <div>
          <button className='text-red-600 text-lg font-medium' onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
    </div>
  )
}

export default Settings