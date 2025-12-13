import React from 'react';
import { useLanguage } from '../i18n';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            <section className="bg-brand-light py-24 mb-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-serif mb-6 text-brand-primary">{t.contact.title}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t.contact.subtitle}</p>
                </div>
            </section>

            <div className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>


                        <div className="space-y-10">

                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 text-brand-primary">{t.contact.directContact}</h4>
                                <div className="text-gray-600 space-y-2">
                                    <p><span className="font-bold w-24 inline-block text-brand-primary">Email:</span> info@construct-corp.cr</p>
                                    <p><span className="font-bold w-24 inline-block text-brand-primary">Tel:</span> +506 2222 0000</p>
                                    <p><span className="font-bold w-24 inline-block text-brand-primary">WhatsApp:</span> +506 8888 0000</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 text-brand-primary">{t.contact.hours}</h4>
                                <p className="text-gray-600">
                                    Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                                    Sábados: 9:00 AM - 1:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 md:p-10 shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-serif mb-8 text-brand-primary">{t.contact.form.title}</h3>
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const data = Object.fromEntries(formData);

                            const subject = encodeURIComponent(`Nuevo Mensaje Web de ${data.name}`);
                            const body = encodeURIComponent(`Hola FG Constructores,

Soy ${data.name}.

Detalles del contacto:
----------------------------------------
📧 Correo: ${data.email}
📱 Teléfono: ${data.phone}
----------------------------------------

Mensaje:
${data.message}

Enviado desde el sitio web.`);

                            window.location.href = `mailto:eddyy.martin.mora@gmail.com?subject=${subject}&body=${body}`;
                        }}>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-brand-primary">{t.contact.form.name}</label>
                                <input type="text" name="name" required className="w-full bg-brand-light border border-gray-200 p-4 focus:outline-none focus:border-brand-primary transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-brand-primary">{t.contact.form.email}</label>
                                <input type="email" name="email" required className="w-full bg-brand-light border border-gray-200 p-4 focus:outline-none focus:border-brand-primary transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-brand-primary">{t.contact.form.phone}</label>
                                <input type="tel" name="phone" className="w-full bg-brand-light border border-gray-200 p-4 focus:outline-none focus:border-brand-primary transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-brand-primary">{t.contact.form.details}</label>
                                <textarea name="message" required rows="4" className="w-full bg-brand-light border border-gray-200 p-4 focus:outline-none focus:border-brand-primary transition-colors"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-primary text-white font-bold uppercase tracking-[2px] py-4 hover:bg-brand-accent hover:text-brand-primary transition-all duration-300">
                                {t.contact.form.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>



            {/* FAQ Section */}
            <section className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-200 pt-16">
                    {t.contact.faq.map((faq, i) => (
                        <div key={i}>
                            <h4 className="font-bold text-lg mb-4 text-brand-primary">{faq.q}</h4>
                            <p className="text-gray-600">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Contact;
