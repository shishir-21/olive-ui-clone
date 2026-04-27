const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px"
    }}>
      
      <h2 style={{ color: "green" }}>Olive</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#">Solutions</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </div>

      <button style={{
        background: "green",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "20px"
      }}>
        Get Olive →
      </button>

    </nav>
  )
}

export default Navbar
