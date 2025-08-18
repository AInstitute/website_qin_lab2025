import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            If you are interested in our research and would like to join us or collaborate with us. We welcome
            undergraduates, postgraduates and postdocs who are interested in working with us, please contact us using
            the below information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a href="mailto:qin.xinghu@163.com" className="text-blue-600 hover:underline">
                  qin.xinghu@163.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <a href="tel:13002162628" className="text-blue-600 hover:underline">
                  13002162628
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">35 Qinghua E Rd, Hai Dian District, China 100107</p>
                <p className="text-gray-600">1119, the main building of BJFU</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Office Hours</p>
                <p className="text-gray-600">Monday 9:00 to 12:30</p>
                <p className="text-gray-600">Wednesday 09:00 to 12:00</p>
                <p className="text-gray-600">Friday 14:00 to 17:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Appointments</p>
                <a href="#" className="text-blue-600 hover:underline">
                  Book an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
