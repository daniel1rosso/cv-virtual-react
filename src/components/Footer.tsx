const Footer = () => {
    return (
        <footer  className="bg-gradient-to-r from-blue-100 to-blue-300 py-5 px-8 md:px-24">
            <div className="container mx-auto px-4 text-center">
                <p>
                    Copyright &copy; {new Date().getFullYear()} -{" "}
                    <a
                        className="font-bold text-white-800"
                        href="https://danielalbertorosso.com.ar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Daniel Alberto Rosso
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;