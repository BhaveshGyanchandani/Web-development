export function Header() {
  return (
    <header>
      <nav>
        <img
          style={{
            marginTop: "8px",
            marginLeft: "50px",
            height: "30px",
            width: "58px",
          }}
          src="https://as1.ftcdn.net/v2/jpg/05/89/74/98/1000_F_589749890_H45Yq3Hxn7R6xMyti5u2vLNk2jX0vGst.jpg"/>

        <label>JobHunt </label>

        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </nav>

      <div>
        <ul className="Dk">
          <li className="DKli"><label className="show">Jobs & careers  </label>
          <ul id="Dropdown" className="DropDownUl">
            <li className="DropDownLi">op1</li>
            <li className="DropDownLi">op2</li>
            <li className="DropDownLi">op3</li>
          </ul>
          </li>

          <li className="DKli"><label className="show">Job Market   </label>
          <ul id="Dropdown" className="DropDownUl">
            <li className="DropDownLi">op1</li>
            <li className="DropDownLi">op2</li>
            <li className="DropDownLi">op3</li>
          </ul>
          </li>

          <li className="DKli"><label className="show">Department/Field  </label>
          <ul id="Dropdown" className="DropDownUl">
            <li className="DropDownLi">op1</li>
            <li className="DropDownLi">op2</li>
            <li className="DropDownLi">op3</li>
          </ul>
          </li>

          <li className="DKli"><label className="show">Support  </label>
          <ul id="Dropdown" className="DropDownUl">
            <li className="DropDownLi">op1</li>
            <li className="DropDownLi">op2</li>
            <li className="DropDownLi">op3</li>
          </ul>
          </li>
          
        </ul>
      </div>

      <div id="JobHunt">
            <span>Find a Job</span>
      </div>

    </header>
  );
}
