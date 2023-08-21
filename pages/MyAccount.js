import style from '../styles/Myaccount.module.css';
import { L } from '@/components/temp';
import data from "../public/data.json";

function MyAccount() {
    const loggedInEmail = L[0];

    // Find the user object based on the logged-in email
    const user = data.credentials.find(item => item[loggedInEmail]);
    console.log(user)
    

    
    return (
        
        <div>
            <h1>Personal Information</h1>
            {loggedInEmail?
            <>
            <form>
                <label className={style.label} htmlFor="name">Name</label>
                <input
                    className={style.input}
                    type="text"
                    name="name"
                    id="name"
                    value={user[loggedInEmail] && user[loggedInEmail].name}
                    readOnly
                />

                <label className={style.label} htmlFor="email">Email Address</label>
                <input
                    className={style.input}
                    type="email"
                    name="email"
                    id="email"
                    value={loggedInEmail || ''}
                    readOnly
                />

                <label className={style.label} htmlFor="mobile">Mobile Number</label>
                <input
                    className={style.input}
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={user[loggedInEmail] && user[loggedInEmail].mobile }
                    readOnly
                />

                <label className={style.label} htmlFor="address">Address</label>
                <input
                    className={style.input}
                    type="text"
                    name="address"
                    value={ user[loggedInEmail] && user[loggedInEmail].Address}
                    readOnly
                />

                <label className={style.label} htmlFor="city">City</label>
                <input
                    className={style.input}
                    type="text"
                    name="city"
                    value={user[loggedInEmail] && user[loggedInEmail].city}
                    readOnly
                />

                {/* Add more fields as needed */}

                <button className={style.button} type="submit">Update Profile</button>
            </form>
            </>:<>Login to view this page</>}
        </div>
    );
}

export default MyAccount;
