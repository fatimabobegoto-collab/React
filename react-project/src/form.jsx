import "./form.css";

export default function Forms() {
  function handle(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    console.log(name);
  }

  return (
    <>
      <h1>Login/Registration</h1>
      <form id="container" method="POST">
        <label htmlFor="name">
          Name:
          <input type="text" id="name" />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" name="password" />
        </label>

        <fieldset>
          <legend>Sex</legend>
          <label htmlFor="male" name="sex">
            Male
            <input type="radio" />
          </label>

          <label htmlFor="female" name="sex">
            Female
            <input type="radio" />
          </label>
        </fieldset>

        <fieldset>
            <textarea name="textarea" id="textarea" placeholder="Type something"></textarea>
        </fieldset>

        <select name="select" id="sel">
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
        </select>

        <button onSubmit={handle}> submit</button>
      </form>
    </>
  );
}
