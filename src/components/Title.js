import './styles.css'
export default function Login() {
    return (
      <div className="login-container">
        <h1>Bienvenido</h1>
        <form className="login-form">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" required />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  }
  