"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { Moon, Sun, User, UserPlus, Calendar, Trophy, Linkedin, Instagram, Star, Youtube } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [eventRatings, setEventRatings] = useState({});
  const [eventFeedback, setEventFeedback] = useState({});

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleRatingChange = (eventId, rating) => {
    setEventRatings(prev => ({ ...prev, [eventId]: rating }));
  };

  const handleFeedbackChange = (eventId, feedback) => {
    setEventFeedback(prev => ({ ...prev, [eventId]: feedback }));
  };

  const submitFeedback = (eventId) => {
    console.log(`Feedback submitted for event ${eventId}:`, {
      rating: eventRatings[eventId],
      feedback: eventFeedback[eventId]
    });
    // Here you would typically send this data to your backend
  };

  // Sample YouTube video data
  const youtubeVideos = [
    {
      id: "video1",
      title: "Dicas para Entrevistas de Estágio em TI",
      thumbnail: "/placeholder.svg?height=180&width=320",
      url: "https://www.youtube.com/watch?v=Lvxpl0bwYf8"
    },
    {
      id: "video2",
      title: "Como Criar um Portfólio Tech Impressionante",
      thumbnail: "/placeholder.svg?height=180&width=320",
      url: "https://www.youtube.com/watch?v=example2"
    },
    {
      id: "video3",
      title: "Tecnologias Mais Procuradas em 2024",
      thumbnail: "/placeholder.svg?height=180&width=320",
      url: "https://www.youtube.com/watch?v=example3"
    }
  ];

  return (
    <div
      className={`min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <header className="fixed top-0 z-20 w-full bg-opacity-80 backdrop-filter backdrop-blur-md py-4 px-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-bold">
              <span className="text-green-500">OS</span>
              <span
                className={`transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                ESTAGIÁRIOS
              </span>
            </span>
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  darkMode ? "bg-white" : "bg-black"
                }`}
              >
                <span
                  className={`text-xl transition-colors duration-300 ${
                    darkMode ? "text-green-500" : "text-green-500"
                  }`}
                >
                  &lt;/&gt;
                </span>
              </div>
              <span className="absolute -bottom-1 -right-1 text-xs font-mono">
                <span className="text-green-500">0101</span>
                <span className="text-pink-500">1001</span>
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className={`transition-colors duration-300 ${
                darkMode ? "text-white hover:text-green-400" : "text-black hover:text-green-600"
              }`}
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              className={`transition-colors duration-300 ${
                darkMode ? "text-white hover:text-green-400" : "text-black hover:text-green-600"
              }`}
            >
              Programas
            </Button>
            <Button
              variant="ghost"
              className={`transition-colors duration-300 ${
                darkMode ? "text-white hover:text-green-400" : "text-black hover:text-green-600"
              }`}
            >
              Contato
            </Button>
            <Button
              variant="outline"
              className={`transition-colors duration-300 ${
                darkMode ? "text-white hover:text-green-400" : "text-black hover:text-green-600"
              }`}
            >
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button
              variant="outline"
              className={`transition-colors duration-300 ${
                darkMode ? "text-white hover:text-green-400" : "text-black hover:text-green-600"
              }`}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Cadastro
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4"
            >
              {darkMode ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          </nav>
        </div>
      </header>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-64 h-32 border-2 rounded-3xl transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${
            darkMode ? "border-green-700" : "border-green-300"
          }`}
        ></div>
        <div
          className={`absolute top-1/4 right-0 w-96 h-48 border-2 rounded-3xl transform translate-x-1/2 transition-colors duration-300 ${
            darkMode ? "border-green-700" : "border-green-300"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-1/4 w-80 h-40 border-2 rounded-3xl transform -translate-y-1/2 transition-colors duration-300 ${
            darkMode ? "border-green-700" : "border-green-300"
          }`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1
              className={`text-5xl font-bold mb-6 transition-colors duration-300 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
               Venha fazer parte da nossa jornada na tecnologia! 
            </h1>
            <p
              className={`text-xl mb-8 transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
            Se você é apaixonado por aprender, conectar-se e crescer, Os Estagiários é o lugar para você! Junte-se à nossa comunidade e descubra eventos incríveis, mentoria, e oportunidades que vão transformar sua carreira.
            </p>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white animate-blink"
            >
              Inscreva-se agora
            </Button>
          </div>

          <div className="md:w-1/2 flex items-center justify-center">
            <div
              className={`relative w-full h-80 rounded-3xl flex items-center justify-center p-4 transition-colors duration-300 ${
                darkMode ? "bg-green-900" : "bg-green-100"
              }`}
            >
              <div
                className={`absolute inset-0 w-[90%] h-[90%] rounded-3xl transition-colors duration-300 ${
                  darkMode ? "bg-green-800" : "bg-green-200"
                }`}
              ></div>
              <img
                src="./os estagiarios (sem fundo nem borda).png"
                alt="Imagem de Estagiários"
                className="relative w-auto h-[150%] object-contain z-10 animate-float"
                style={{ filter: "drop-shadow(10px 10px 16px 10px rgba(0, 0, 0, 0.4))" }}
              />
            </div>
          </div>
        </section>

        {/* Quem Somos Section */}
        <section className="py-16">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-colors duration-300 ${
            darkMode ? "text-white" : "text-black"
          }`}>
            Quem Somos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg shadow-md transition-colors duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}>
              <h3 className="text-2xl font-semibold mb-4 text-green-500">Nossa Missão</h3>
              <p className={`transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
              Empoderar indivíduos por meio de educação e colaboração, proporcionando acesso a eventos, oportunidades e um espaço seguro para aprendizado e crescimento.
              </p>
            </div>
            <div className={`p-6 rounded-lg shadow-md transition-colors duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}>
              <h3 className="text-2xl font-semibold mb-4 text-green-500">Nossa Visão</h3>
              <p className={`transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
               Ser a principal rede de apoio e desenvolvimento para estudantes e profissionais da tecnologia, promovendo uma comunidade inclusiva que transforma talentos em realidade.
              </p>
            </div>
            <div className={`p-6 rounded-lg shadow-md transition-colors duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}>
              <h3 className="text-2xl font-semibold mb-4 text-green-500">Nossos Valores</h3>
              <ul className={`list-disc list-inside transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                <li>Educação e Desenvolvimento</li>
                <li>Inclusão e Acolhimento</li>
                <li>Colaboração</li>
                <li>Transformação Individual e Social</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Eventos Section */}
        <section className="py-16">
          <h2 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
            darkMode ? "text-white" : "text-black"
          }`}>
            Eventos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((event) => (
              <div key={event} className={`p-6 rounded-lg shadow-md transition-colors duration-300 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}>
                <Calendar className="w-12 h-12 mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Workshop de Desenvolvimento Web</h3>
                <p className={`mb-4 transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  Aprenda as últimas tecnologias em desenvolvimento web com nossos especialistas.
                </p>
                <Button variant="outline" className="text-green-500 hover:text-green-600">
                  Saiba mais
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section className="py-16">
  <h2 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
    darkMode ? "text-white" : "text-black"
  }`}>
    Últimos Vídeos
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {youtubeVideos.map((video) => (
      <div key={video.id} className={`p-6 rounded-lg shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            width="100%"
            height="100%"
            src={video.url.replace("watch?v=", "embed/")} // Modifica a URL para embed
            title={video.title}
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-500 hover:text-green-600"
        >
          <Youtube className="w-5 h-5 mr-2" />
          Assistir no YouTube
        </a>
      </div>
    ))}
  </div>
</section>


{/* Event Evaluation Section */}
<section className="py-16">
          <h2 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
            darkMode ? "text-white" : "text-black"
          }`}>
            Avaliação de Eventos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Meetup Os Estagiários" },
              { id: 2, name: "Tech Nights" },
              { id: 3, name: "Prototipando Ideias" },
            ].map((event) => (
              <div key={event.id} className={`p-6 rounded-lg shadow-md transition-colors duration-300 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}>
                <h3 className="text-xl font-semibold mb-4">{event.name}</h3>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 cursor-pointer ${
                        star <= (eventRatings[event.id] || 0)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-400"
                      }`}
                      onClick={() => handleRatingChange(event.id, star)}
                    />
                  ))}
                </div>
                <Textarea
                  placeholder="Compartilhe seus pensamentos sobre o evento..."
                  className={`w-full mb-4 transition-colors duration-300 ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                  }`}
                  value={eventFeedback[event.id] || ""}
                  onChange={(e) => handleFeedbackChange(event.id, e.target.value)}
                />
                <Button
                  onClick={() => submitFeedback(event.id)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Enviar Avaliação
                </Button>
              </div>
            ))}
          </div>
        </section>




         {/* Ranking Section */}
         <section className="py-16">
          <h2 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
            darkMode ? "text-white" : "text-black"
          }`}>
            Ranking dos Melhores Eventos
          </h2>
          <div className={`overflow-x-auto transition-colors duration-300 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <table className="min-w-full">
              <thead>
                <tr className={`transition-colors duration-300 ${
                  darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
                }`}>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Posição</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Evento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Pontuação</th>
                </tr>
              </thead>
              <tbody className={`divide-y transition-colors duration-300 ${
                darkMode ? "divide-gray-700" : "divide-gray-200"
              }`}>
                {[
                  { position: 1, event: "Tech Nights", score: 95 },
                  { position: 2, event: "Prototipando Ideias", score: 92 },
                  { position: 3, event: "Meetup Os Estagiários", score: 88 },
                  { position: 4, event: "The Developers Conference", score: 85 },
                  { position: 5, event: "Campus Party", score: 82 },
                ].map((item) => (
                  <tr key={item.position} className={`transition-colors duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                        {item.position}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.event}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Contato Section (Partnership Form) */}
        <section className="py-16">
          <h2 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
            darkMode ? "text-white" : "text-black"
          }`}>
            Parcerias
          </h2>
          <div className={`max-w-md mx-auto p-6 rounded-lg shadow-md transition-colors duration-300 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className={`block mb-2 transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}>Nome da Empresa</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Sua empresa"
                  className={`w-full transition-colors duration-300 ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block mb-2 transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}>E-mail</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className={`w-full transition-colors duration-300 ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block mb-2 transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}>Mensagem</label>
                <Textarea
                  id="message"
                  placeholder="Como podemos colaborar?"
                  className={`w-full transition-colors duration-300 ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                  }`}
                />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                Enviar
              </Button>
            </form>
          </div>
        </section>

       
      </div>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">
                <span className="text-green-500">OS</span> ESTAGIÁRIOS
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-green-500 hover:text-green-600">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-green-500 hover:text-green-600">
                <Instagram className="w-6 h-6" />
              </a>
          
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            © {new Date().getFullYear()} Os Estagiários. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}