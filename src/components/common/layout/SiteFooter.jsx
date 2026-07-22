import { FaEnvelope, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

export default function SiteFooter() {
    return (
        <footer className="mt-20 border-t border-zinc-800 py-8 text-sm text-zinc-400">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex flex-col items-center gap-3 sm:items-start">
                    <div className="flex items-center justify-center gap-5">
                        <a href="mailto:ola@exemplo.com" className="inline-flex items-center gap-2 hover:text-blue-300">
                            <FaEnvelope />
                            ola@exemplo.com
                        </a>
                        <a href="tel:+123456789000" className="inline-flex items-center gap-2 hover:text-blue-300">
                            <FaPhone />
                            +12 (34) 5678-9000
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <a href="#" className="inline-flex items-center gap-2 hover:text-blue-300">
                            <FaLinkedin />
                            LinkedIn
                        </a>
                        <a href="#" className="inline-flex items-center gap-2 hover:text-blue-300">
                            <FaTwitter />
                            X
                        </a>
                    </div>
                </div>
                <p className="text-center sm:text-right">© 2026 Uelinton Janke IA. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}