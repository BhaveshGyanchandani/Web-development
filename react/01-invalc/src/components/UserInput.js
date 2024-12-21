export function UserInput({onChange , userInput}){
    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label>Initial Investment </label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) =>  onChange('initialInvestment', event.target.value) } />
                    {/* mtlb onChnage,onClick yeh sb ek hai , aur yeh ek event trigger krte hai.....toh hum in event ko as an argument leke pass krwa skte hai...
                     yeh event.target.value ka mtlb hai event joh trigger hua hai ....event.target mtlb jisne event ko trigger kraya hai like this initialInvestment ....event.target.value
                     ka mtlb hai ki iss onChange event ko jisne trigger krwaya hai uski value wali attribute ko yha daalna as a arguemnt */}
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) =>  onChange('annualInvestment', event.target.value) } />
                </p>
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value) } />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) =>  onChange('duration', event.target.value) } />
                </p>

            </div>
        </section>
    );
}

