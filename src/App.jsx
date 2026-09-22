import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("splash");
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
const [usernameError, setUsernameError] = useState("");
const [dobDay, setDobDay] = useState("");
const [dobMonth, setDobMonth] = useState("");
const [dobYear, setDobYear] = useState("");
const [dobError, setDobError] = useState("");
const [calculatedAge, setCalculatedAge] = useState("");
const [selectedPronouns, setSelectedPronouns] = useState([]);
const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");

  useEffect(() => {
  if (page === "google") {
    setPage("username");
  }
}, [page]);

  // Splash screen loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  // Request location when Location page opens
  useEffect(() => {
    if (page === "location") {
      navigator.geolocation.getCurrentPosition(
        () => {
          console.log("Location enabled");
        },
        () => {
          console.log("Location permission denied");
        }
      );
    }
  }, [page]);

  // Terms page
  if (page === "terms") {
    return (
      <div className="terms-page">

        <div className="terms-logo">
          E<span>•</span>
        </div>

        <div className="terms-content">

          <div className="terms-main-text">
            BY USING THIS APP, YOU’RE AGREEING
            <br />
            TO KEEP THINGS FUN, SAFE, AND
            <br />
            RESPECTFUL... AND ALSO AGREEING
            <br />
            TO OUR TERMS AND CONDITIONS.
            <br />
            POLITENESS IS A MUST—TREAT
            <br />
            OTHERS HOW YOU’D WANT TO BE
            <br />
            TREATED. EVERYONE HERE IS LOOKING
            <br />
            FOR REASONS TO <span>PARTY</span>, SO BRING
            <br />
            YOUR BEST VIBE AND EXPECT THE
            <br />
            SAME FROM OTHERS. LET'S PARTY
            <br />
            RESPONSIBLY AND MAKE EVERY
            <br />
            EXPERIENCE A GREAT ONE!
          </div>

          <div className="terms-bottom">
            <p>
              To proceed, accept <strong>Terms and Conditions</strong>
            </p>

            <button
              className="accept-button"
              onClick={() => setPage("location")}
            >
              ACCEPT
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Location page
  if (page === "location") {
    return (
      <div className="location-page">

       <div className="location-logo">
  E<span>•</span>
</div>

        <div className="location-content">

          <h1>
            TRYING TO FETCH YOUR <span>LOCATION...</span>
          </h1>

          <button
  className="location-button"
  onClick={() => setPage("home")}
>
  ENABLE LOCATION
</button>

        </div>

      </div>
    );
  }

  // Home / Party Feed page

if (page === "username") {
  return (
    <div className="username-page">
      <div className="username-top">
  <div className="username-logo">
    <span className="logo-e">E</span>
    <span className="logo-dot">•</span>
  </div>
   <div className="username-getting-ready">
    GETTING READY
  </div>
</div>
      <h1>Create a username that fits your vibe!</h1>

      <input
  type="text"
  placeholder="Username"
  className="username-input"
  value={username}
  onChange={(e) => {
  const value = e.target.value;
  setUsername(value);

  if (value === "") {
    setUsernameError("");
  } else if (!/^[a-z0-9]+$/.test(value)) {
    setUsernameError("Use only lowercase letters and numbers");
  } else if (value.length < 6) {
    setUsernameError("Invalid username");
  } else {
    setUsernameError("");
  }
}}
/>

{usernameError && (
  <p className="username-error">{usernameError}</p>
)}

      <button
  className="username-next"
  onClick={() => {
  if (username === "") {
    setUsernameError("Username is required");
    return;
  }

  if (!/^[a-z0-9]+$/.test(username)) {
    setUsernameError("Use only lowercase letters and numbers");
    return;
  }

  if (username.length < 6) {
    setUsernameError("Invalid username");
    return;
  }

  setPage("name");
}}
>
  NEXT
</button>

      <button
        className="username-back"
        onClick={() => setPage("email")}
      >
        BACK
      </button>
    </div>
  );
}

if (page === "name") {
  return (
    <div className="name-page">

      <div className="signup-top">
        <div className="extrovert-logo">
  <span className="logo-e">E</span>
  <span className="logo-dot">•</span>
</div>
        <div className="getting-ready">GETTING READY</div>
      </div>

      <div className="name-content">
        <h1>"Name, please, for the party check!"</h1>

        <label>NAME</label>

        <input
          type="text"
          className="name-input"
          placeholder=""
        />

        <p className="name-info">
          This is the name shown as on members and requests.
          <br />
          Cannot be changed later.
        </p>
      </div>

      <div className="name-buttons">
        <button
  className="name-next"
  onClick={() => setPage("age")}
>
  NEXT
</button>

        <button
          className="name-back"
          onClick={() => setPage("username")}
        >
          BACK
        </button>
      </div>

    </div>
  );
}

if (page === "age") {
  return (
    <div className="age-page">

      <div className="signup-top">
  <div className="extrovert-logo">
    <span className="logo-e">E</span>
    <span className="logo-dot">•</span>
  </div>

  <div className="getting-ready">
    GETTING READY
  </div>
</div>

      <h1>How many years have you been partying?</h1>

      <button
        className="age-select"
        onClick={() => setPage("dob")}
      >
        DATE OF BIRTH
      </button>

      <button
        className="age-back"
        onClick={() => setPage("username")}
      >
        BACK
      </button>

    </div>
  );
}

if (page === "dob") {
  return (
    <div className="age-page">
      <div className="signup-top">
  <div className="extrovert-logo">
    <span className="logo-e">E</span>
    <span className="logo-dot">•</span>
  </div>

  <div className="getting-ready">
    GETTING READY
  </div>
</div>

      <h1>How many years have you been partying?</h1>
      
      <button
  className="age-display-button"
  onClick={() => setPage("age")}
>
  {calculatedAge || "AGE"}
</button>

      <div className="dob-sheet">
        <h2>DATE OF BIRTH</h2>

        <div className="dob-fields">
          <input
            type="text"
            placeholder="DD"
            maxLength="2"
            inputMode="numeric"
            value={dobDay}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setDobDay(value);
              setDobError("");
            }}
          />

          <input
            type="text"
            placeholder="MM"
            maxLength="2"
            inputMode="numeric"
            value={dobMonth}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setDobMonth(value);
              setDobError("");
            }}
          />

          <input
            type="text"
            placeholder="YYYY"
            maxLength="4"
            inputMode="numeric"
            value={dobYear}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setDobYear(value);
              setDobError("");
            }}
          />
        </div>

        {dobError && (
          <p className="dob-error">{dobError}</p>
        )}

        <button
          className="dob-proceed"
          onClick={() => {
            if (!dobDay || !dobMonth || !dobYear) {
              setDobError("Date of birth is required");
              return;
            }

            const day = Number(dobDay);
            const month = Number(dobMonth);
            const year = Number(dobYear);

            if (
              dobDay.length !== 2 ||
              dobMonth.length !== 2 ||
              dobYear.length !== 4 ||
              day < 1 ||
              month < 1 ||
              month > 12 ||
              year < 1900
            ) {
              setDobError("Invalid date of birth");
              return;
            }

            const birthDate = new Date(year, month - 1, day);

            if (
              birthDate.getDate() !== day ||
              birthDate.getMonth() !== month - 1 ||
              birthDate.getFullYear() !== year
            ) {
              setDobError("Invalid date of birth");
              return;
            }

            const today = new Date();

            if (birthDate > today) {
              setDobError("Date of birth cannot be in the future");
              return;
            }

            let age = today.getFullYear() - year;

            const monthDifference =
              today.getMonth() - (month - 1);

            if (
              monthDifference < 0 ||
              (monthDifference === 0 && today.getDate() < day)
            ) {
              age--;
            }

            setCalculatedAge(age);
            setDobError("");
            setPage("pronouns");
          }}
        >
          PROCEED
        </button>

        <button
          className="dob-back"
          onClick={() => setPage("age")}
        >
          BACK
        </button>
      </div>
    </div>
  );
}

if (page === "pronouns") {
  return (
    <div className="pronouns-page">

      <div className="signup-top">
        <div className="extrovert-logo">
          <span className="logo-e">E</span>
          <span className="logo-dot">•</span>
        </div>

        <div className="getting-ready">
          GETTING READY
        </div>
      </div>

      <div className="pronouns-content">

        <h1>
          Which pronouns feel right for you?
        </h1>

        <label>PRONOUNS</label>

       <button
  className="pronouns-select-box"
  onClick={() => setPage("pronouns-popup")}
>
  {selectedPronouns.length > 0
    ? selectedPronouns.join(", ")
    : "SELECT PRONOUNS"}
</button>

        <p className="pronouns-info">
          Select the pronouns that feel right for you.
        </p>

      </div>

      <div className="pronouns-buttons">

        <button
          className="pronouns-next"
          onClick={() => {
            setPage("invite");
          }}
        >
          NEXT
        </button>

        <button
          className="pronouns-back"
          onClick={() => setPage("age")}
        >
          BACK
        </button>

      </div>

    </div>
  );
}

if (page === "pronouns-popup") {
  return (
    <div className="pronouns-popup-page">
      <div className="pronouns-popup">
        <h2>SELECT PRONOUNS</h2>

        <p>Select upto 3</p>

        {["he", "him", "his", "she", "her", "hers", "they", "them", "theirs", "ze", "zir", "zirs"].map((pronoun) => (
  <div className="pronoun-option" key={pronoun}>

    <button
      className={`pronoun-checkbox ${
        selectedPronouns.includes(pronoun) ? "checked" : ""
      }`}
      onClick={() => {
        if (selectedPronouns.includes(pronoun)) {
          setSelectedPronouns(
            selectedPronouns.filter((item) => item !== pronoun)
          );
        } else if (selectedPronouns.length < 3) {
          setSelectedPronouns([...selectedPronouns, pronoun]);
        }
      }}
    >
      {selectedPronouns.includes(pronoun) ? "✓" : ""}
    </button>

    <span>{pronoun}</span>
    

  </div>
))}
<button
  className="pronouns-proceed"
  onClick={() => {
    if (selectedPronouns.length > 0) {
      setPage("pronouns");
    }
  }}
>
  PROCEED
</button>
      </div>
    </div>
  );
}

if (page === "invite") {
  return (
    <div className="invite-page">

      <div className="signup-top">
        <div className="extrovert-logo">
          <span className="logo-e">E</span>
          <span className="logo-dot">•</span>
        </div>

        <div className="getting-ready">
          GETTING READY
        </div>
      </div>

      <div className="invite-content">

        <div className="invite-text">
          <div>KINDNESS = GOOD <span>HAIR</span> DAY</div>
          <div>SIP IN? <span>CHIP</span> IN.</div>
          <div>GHOSTING IS FOR <span>HALLOWEEN.</span></div>
          <div>OUTFITS LOUD, <span>INTENTIONS</span> CLEAR.</div>
          <div>JOINING? FREE. HOSTING? <span>ALSO FREE.</span></div>
          <div>EARLY IS <span>ICONIC.</span></div>
          <div>YES. <span>SPELLING</span> MISTAKE.</div>
        </div>

        <label>ENTER INVITE CODE (optional)</label>

        <input
          className="invite-input"
          type="text"
        />

        <p>Enter invite code and get up to +30 HVTs!</p>

      </div>

      <div className="invite-buttons">

       <button
  className="invite-next"
  onClick={() => setPage("parties")}
>
  SIGNUP
</button>
        <button
          className="invite-back"
          onClick={() => setPage("pronouns")}
        >
          BACK
        </button>

      </div>

    </div>
  );
}

if (page === "parties") {
  return (
    <div className="parties-page">

      {/* PARTY 1 */}
      <div className="party-feed-card">
        <div className="party-feed-image">
          <div className="gradient-image"></div>
        </div>

        <div className="party-feed-content">
          <h2>Koi din m dinner karega?</h2>

          <div className="party-feed-type">
            <span>PRIVATE PARTY</span>
            <b>🍜 Brunch Outing</b>
          </div>

          <div className="party-feed-user">
            <span className="party-avatar">👤</span>
            <strong>@googlehoney</strong>
          </div>

          <div className="party-feed-info">
            <div>
              <span>12:00 PM</span>
              <span>21/10/26</span>
            </div>

            <p>M Cafe - Bengaluru Marriott<br />
              Hotel Whitefield Whitefield Bar & G...</p>
          </div>

          <button className="view-flyer">VIEW FLYER</button>
        </div>

        <div className="spots-left">11 spots left!</div>
      </div>


      {/* PARTY 2 */}
      <div className="party-feed-card">
  <div className="party-feed-image">
   <img src={`${import.meta.env.BASE_URL}party2.jpg`} alt="Party 2" />
  </div>

  <div className="party-feed-content">
    <h2>All party people</h2>

    <div className="party-feed-type">
      <span>PRIVATE PARTY</span>
      <b>💻 Co-Work</b>
    </div>

    <div className="party-details-box">
  <div className="party-date-row">
    <span>12:00 PM</span>
    <span>21/10/26</span>
  </div>

  <div className="party-location">
    M Cafe - Bengaluru Marriott<br />
    Hotel Whitefield Whitefield Bar & G...
  </div>
</div>

    <button className="view-players-btn">
      VIEW PLAYERS
    </button>
  </div>

  <div className="spots-left">8 spots left!</div>
</div>

      {/* PARTY 3 */}
      <div className="party-feed-card">
        <div className="party-feed-image">
          <img src="/party3.png" alt="Party 3" />
        </div>

        <div className="party-feed-content">
          <h2>Hi</h2>

          <div className="party-feed-type">
            <span>PRIVATE PARTY</span>
            <b>☕ Coffee Break</b>
          </div>

          <div className="party-feed-user">
            <span className="party-avatar">RK</span>
            <strong>@rahulxkumar</strong>
          </div>

          <div className="party-feed-info">
            <div>
              <span>2:41 PM</span>
              <span>03/10/26</span>
            </div>

            <p>Loca Moca Cafe | Cafe In Frazer<br />
              Town Bengaluru | Cafes In Bengalur...</p>
          </div>

          <button className="view-flyer">VIEW FLYER</button>
        </div>

        <div className="spots-left">3 spots left!</div>
      </div>

    </div>
  );
}
 
if (page === "email") {
  return (
    <div className="email-page">

      <div className="signup-top">
        <div className="extrovert-logo">
          <span className="logo-e">E</span>
          <span className="logo-dot">•</span>
        </div>

        <div className="getting-ready">
          GETTING READY
        </div>
      </div>

      <div className="email-content">
        <h1>Enter your email</h1>

        <label>EMAIL</label>

        <input
          type="email"
          className="email-input"
          placeholder=""
          value={email}
          onChange={(e) => {
  setEmail(e.target.value);
  setEmailError("");
}}
        />
        {emailError && (
  <p className="email-error">{emailError}</p>
)}

      </div>

      <div className="email-buttons">
        <button
  className="email-next"
  onClick={() => {
    if (email.trim() === "") {
      setEmailError("Email is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address");
      return;
    }

    setPage("username");
  }}
>
  NEXT
</button>

        <button
          className="email-back"
          onClick={() => setPage("account")}
        >
          BACK
        </button>
      </div>
      
    </div>
  );
}


if (page === "home" || page === "account")  {
  return (
    <div className="home-page">
      {/* Top section */}
      <div className="home-header">
        <div className="home-logo">
          E<span>•</span>
        </div>

        <div className="home-icons">
          <div className="vip-box">
            <span>VIP</span>
            <b>0</b>
          </div>
          <div className="icon notification-icon">
  ♧
</div>
          <div className="icon">☏</div>
        </div>
      </div>

      {/* Club */}
      <div className="club-title">YOUR CLUB</div>

      <div className="club-card">
  <div className="club-card-content">
    <span>Silver Club Member</span>
    <div className="club-badge">
  <span className="inner-star">✦</span>
</div>
  </div>

  <div className="club-progress">
    <div className="club-progress-fill"></div>
  </div>
</div>
      <div className="vibe-tokens">
        🪙 <span>YOU HAVE 160 HONORARY VIBE TOKENS!</span>
      </div>

      {/* Party card */}
      <div className="party-card">
  <div className="party-image">
    <div className="gradient-image"></div>
  </div>

  <div className="party-title-row">
    <div>
      <h2>Koi din m dinner karega?</h2>
      <p>PRIVATE PARTY</p>
    </div>
    <div className="party-badge">✦</div>
  </div>

  <p className="party-description">Hello people!</p>

  <div className="party-user-row">
    <strong>@googlehoney</strong>
    <span className="party-tag">🍜 Brunch Outing</span>
  </div>

  <div className="party-details">
    <div className="date-time-row">
      <div>
        <span>12:00 PM</span>
        <span>◷</span>
      </div>

      <div>
        <span>21/10/26</span>
        <span>▣</span>
      </div>
    </div>

    <div className="party-location">
      <span>
        Tea Leaf Bengaluru, 23/1, 6th Main 4th Near Cross,
        Ganesh Temple St...
      </span>
      <span>⌖</span>
    </div>
  </div>

  <button
    className="join-button"
    onClick={() => setPage("account")}
  >
    JOIN
  </button>
</div>

{/* PARTY CARD 2 */}
<div className="party-card party-card-two">
  <div className="party-image">
    <img 
  src="/party2.jpg"
  alt="Party 2"
  className="party-two-image"
/>
  </div>

  <div className="party-title-row">
    <div>
      <h2>All party people</h2>
      <p>PRIVATE PARTY</p>
    </div>
    <div className="party-badge">✦</div>
  </div>

  <p className="party-description">
    Taakte rehte tujhko saanjh savere<br />
    Nainon mein basiyaa jaise nain ye tere<br />
    Nainon mein basiyaa jaise nain ye tere<br />
    Tere mast mast do nain<br />
    Mere dil ka le gaye chain<br />
    Mere dil ka le gaye chain<br />
    Tere mast mast do nain
  </p>

  <div className="party-user-row">
    <strong>@googlehoney</strong>
    <span className="party-tag blue-tag">💻 Co-Work</span>
  </div>

  <div className="party-details">
    <div className="date-time-row">
      <div>
        <span>5:45 PM</span>
        <span>◷</span>
      </div>

      <div>
        <span>15/10/26</span>
        <span>▣</span>
      </div>
    </div>

    <div className="party-location">
      <span>
        Loca Moca Cafe | Cafe In Frazer Town Bengaluru | Cafes In Bengaluru...
      </span>
      <span>⌖</span>
    </div>
  </div>

  <button
    className="join-button"
    onClick={() => setPage("account")}
  >
    JOIN
  </button>
</div>

{/* PARTY CARD 3 */}
<div className="party-card party-card-three">
  <div className="party-image">
    <img
      src="/party3.png"
      alt="Party 3"
      className="party-three-image"
    />
  </div>

  <div className="party-title-row">
    <div>
      <h2>Workout together</h2>
      <p>PRIVATE PARTY</p>
    </div>
    <div className="party-badge">✦</div>
  </div>

  <p className="party-description">
    Let's workout and have some fun!
  </p>

  <div className="party-user-row">
    <strong>@googlehoney</strong>
    <span className="party-tag">🏋️ Fitness</span>
  </div>

  <div className="party-details">
    <div className="date-time-row">
      <div>
        <span>6:00 PM</span>
        <span>◷</span>
      </div>

      <div>
        <span>16/10/26</span>
        <span>▣</span>
      </div>
    </div>

    <div className="party-location">
      <span>
        Bengaluru Fitness Center, Bengaluru...
      </span>
      <span>⌖</span>
    </div>
  </div>

  <button
    className="join-button"
    onClick={() => setPage("account")}
  >
    JOIN
  </button>

  {page === "account" && (
  <>
    <div
      className="account-overlay"
      onClick={() => setPage("home")}
    ></div>

    <div className="account-sheet">
      <div className="account-sheet-handle"></div>

      <button
        className="account-close"
        onClick={() => setPage("home")}
      >
        ×
      </button>

      <h2>YOU NEED AN ACCOUNT</h2>

      <p>
        Create an account to join events, earn HVTs, and
        <br />
        party with extroverts near you- all for free!
      </p>

      <button
  className="account-option"
  onClick={() => setPage("google")}
>
  <span className="google-icon">G</span>
  CONTINUE WITH GOOGLE
</button>

<button
  className="account-option"
  onClick={() => setPage("email")}>
  <span className="email-icon">✉</span>
  CONTINUE WITH EMAIL
</button>

      <button
        className="maybe-later"
        onClick={() => setPage("home")}
      >
        MAYBE LATER
      </button>
    </div>
  </>
)}
</div>       
    </div>
  );
}

  // Splash page
  return (
    <div className="splash-page">
      <div className="splash-content">

        <div className="big-logo">
          E<span>•</span>
        </div>

        <p className="only-for">AN APP ONLY FOR</p>

        <h1>EXTROVERTS</h1>

        <p className="warning">
          <span>Warning:</span> Entering may lead to spontaneous dancing and
          unsolicited high-fives!
        </p>

        {loading ? (
          <button className="loading-button">
            LOADING...
          </button>
        ) : (
          <button
            className="white-button"
            onClick={() => setPage("terms")}
          >
            CONTINUE
          </button>
        )}

      </div>
    </div>
  );
}

export default App;
