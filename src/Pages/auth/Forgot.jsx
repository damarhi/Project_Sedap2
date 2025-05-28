import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Forgot() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Tambahkan proses pengiriman email reset password di sini
        console.log("Reset password untuk:", email)
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
                Forgot Your Password?
            </h2>

            <p className="text-sm text-gray-500 mb-6 text-center">
                Enter your email address and we'll send you a link to reset your
                password.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    Send Reset Link
                </button>
            </form>

            {/* Login */}
            <button
                onClick={() => navigate("/login")}
                className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
                Kembali ke Login
            </button>

            {/* register */}
            <div className="mt-4 text-center">
                <button
                    onClick={() => navigate("/register")}
                    className="text-sm text-blue-600 hover:underline"
                >
                    Belum Punya Akun? Register
                </button>
            </div>
        </div>
    )
}
