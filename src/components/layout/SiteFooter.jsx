import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SiteFooter() {
    const linkClasses =
        "inline-flex items-center gap-2 text-zinc-400 transition-colors duration-200 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"

    return (
        <footer className="mt-20 border-t border-zinc-800 py-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-5">
                    <div>
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-200">
                            Contato
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:ola@exemplo.com"
                                className={linkClasses}
                            >
                                <FaEnvelope aria-hidden="true" />
                                <span>ola@exemplo.com</span>
                            </a>

                            <a
                                href="tel:+123456789000"
                                className={linkClasses}
                            >
                                <FaPhone aria-hidden="true" />
                                <span>+12 (34) 5678-9000</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-200">
                            Redes sociais
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a 
                                href="#" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                <FaLinkedin aria-hidden="true" />
                                <span>LinkedIn</span>
                            </a>

                            <a 
                                href="#"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                <FaXTwitter aria-hidden="true" />
                                <span>X / Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-zinc-500 sm:text-right">
                    © 2026 Synapse IA. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}