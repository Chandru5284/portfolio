'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, XCircle, Mail, Phone, MessageSquare } from 'lucide-react';
import { sendContactEmail } from '@/app/actions/contact';

interface ContactSectionProps {
	initialMessage?: string;
}

interface FormValues {
	name: string;
	email: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

export default function ContactSection({ initialMessage }: ContactSectionProps) {
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
	const [values, setValues] = useState<FormValues>({
		name: '',
		email: '',
		message: ''
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [touched, setTouched] = useState<Record<string, boolean>>({});
	const [errorMessage, setErrorMessage] = useState('');

	// Sync initialMessage to values.message
	useEffect(() => {
		if (initialMessage) {
			setValues(prev => ({ ...prev, message: initialMessage }));
		}
	}, [initialMessage]);

	const validateField = (name: string, value: string): string => {
		switch (name) {
			case 'name':
				if (!value.trim()) return "Please enter your name";
				if (value.trim().length < 2) return "Name should be at least 2 characters";
				return "";
			case 'email':
				if (!value.trim()) return "Please enter your email";
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
				return "";
			case 'message':
				if (!value.trim()) return "Please describe your project";
				if (value.trim().length < 10) return "Message should be at least 10 characters";
				return "";
			default:
				return "";
		}
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setTouched(prev => ({ ...prev, [name]: true }));
		const error = validateField(name, value);
		setErrors(prev => ({ ...prev, [name]: error }));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setValues(prev => ({ ...prev, [name]: value }));

		// Clear error as user types if it was already marked as touched
		if (touched[name]) {
			const error = validateField(name, value);
			setErrors(prev => ({ ...prev, [name]: error }));
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validate all fields
		const newErrors: FormErrors = {
			name: validateField('name', values.name),
			email: validateField('email', values.email),
			message: validateField('message', values.message)
		};

		setErrors(newErrors);
		setTouched({ name: true, email: true, message: true });

		const hasErrors = Object.values(newErrors).some(err => err !== "");
		if (hasErrors) return;

		setStatus('loading');
		setErrorMessage('');

		const formData = new FormData();
		formData.append('name', values.name);
		formData.append('email', values.email);
		formData.append('message', values.message);

		const result = await sendContactEmail(formData);

		if (result?.success) {
			setStatus('success');
		} else {
			setErrorMessage(result?.error || 'Something went wrong. Please try again.');
			setStatus('error');
		}
	};

	const getInputClasses = (fieldName: keyof FormErrors) => {
		const hasError = touched[fieldName] && errors[fieldName];
		return `w-full bg-white dark:bg-zinc-900 border ${hasError
			? "border-red-400 focus:ring-red-400"
			: "border-gray-300 dark:border-white/10 focus:ring-purple-500 focus:border-purple-500"
			} rounded-xl px-5 py-4 focus:ring-2 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400 shadow-sm`;
	};

	return (
		<section id="contact" className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 relative">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12 flex flex-col items-center">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-2xl sm:text-4xl font-extrabold mb-3 sm:mb-4 text-gray-900 dark:text-white leading-tight"
					>
						Ready to transform your <span className="grad-text">Digital Vision?</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium"
					>
						Limited availability for new projects. Send a message and get a response within a few hours.
					</motion.p>
				</div>

				{/* Direct Contact Block */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
				>
					{[
						{
							icon: Mail,
							label: "Email",
							value: "chandrucm5284@email.com",
							href: "mailto:chandrucm5284@gmail.com",
							color: "hover:text-blue-500"
						},
						{
							icon: Phone,
							label: "Phone",
							value: "+91 63807 41790",
							href: "tel:+916380741790",
							color: "hover:text-green-500"
						},
						// {
						// 	icon: MessageSquare,
						// 	label: "WhatsApp",
						// 	value: "+91 WhatsApp",
						// 	href: "https://wa.me/91XXXXXXXXXX",
						// 	color: "hover:text-emerald-500"
						// }
					].map((item, idx) => (
						<a
							key={idx}
							href={item.href}
							className="group w-full md:w-auto flex items-center gap-4 px-5 py-4 sm:px-8 sm:py-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0B0F1A] border border-gray-100 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:-translate-y-2"
						>
							<div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-500/5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-sm`}>
								<item.icon size={20} className="sm:w-[22px] sm:h-[22px]" />
							</div>
							<div className="text-left">
								<p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 dark:text-gray-500 mb-0.5 sm:mb-1">{item.label}</p>
								<p className="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-none">{item.value}</p>
							</div>
						</a>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.98 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className="bg-white dark:bg-[#0B0F1A] p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl dark:shadow-none border border-gray-100 dark:border-white/10 relative overflow-hidden group"
				>
					{/* Form background glow */}
					<div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors duration-700" />
					<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-700" />
					<AnimatePresence mode="wait">
						{status === 'success' ? (
							<motion.div
								key="success"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-center py-12"
							>
								<div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
									<CheckCircle2 size={40} className="text-green-500" />
								</div>
								<h3 className="text-2xl font-bold mb-4">Consultation Requested!</h3>
								<p className="text-zinc-600 dark:text-zinc-400">
									Thank you for reaching out. I&apos;ll get back to you within a few hours to discuss your project and guide you with the best approach.
								</p>
								<button
									onClick={() => {
										setStatus('idle');
										setValues({ name: '', email: '', message: '' });
										setErrors({});
										setTouched({});
									}}
									className="cursor-pointer mt-8 text-primary font-bold hover:underline"
								>
									Send another message
								</button>
							</motion.div>
						) : (
							<motion.form
								key="form"
								noValidate // Remove default browser validation
								initial={{ opacity: 1 }}
								exit={{ opacity: 0, y: -20 }}
								onSubmit={handleSubmit}
								className="space-y-6"
							>
								<div className="text-center mb-10 p-6 rounded-2xl bg-primary/5 border border-primary/10">
									<p className="text-zinc-700 dark:text-zinc-300 font-medium">
										You’ll be working directly with me — <span className="font-bold text-gray-900 dark:text-white">Chandru</span>. I usually respond within a few hours.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label className="text-sm font-medium text-gray-700 dark:text-zinc-100 mb-2 block">Name</label>
										<input
											type="text"
											name="name"
											value={values.name}
											onChange={handleChange}
											onBlur={handleBlur}
											placeholder="John Doe"
											className={getInputClasses('name')}
										/>
										<AnimatePresence>
											{touched.name && errors.name && (
												<motion.p
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: 'auto' }}
													exit={{ opacity: 0, height: 0 }}
													className="!text-red-500 text-sm mt-1 font-medium"
												>
													{errors.name}
												</motion.p>
											)}
										</AnimatePresence>

									</div>
									<div className="space-y-2">
										<label className="text-sm font-medium text-gray-700 dark:text-zinc-100 mb-2 block">Email</label>
										<input
											type="email"
											name="email"
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											placeholder="john@example.com"
											className={getInputClasses('email')}
										/>
										<AnimatePresence>
											{touched.email && errors.email && (
												<motion.p
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: 'auto' }}
													exit={{ opacity: 0, height: 0 }}
													className="!text-red-500 text-sm mt-1 font-medium"
												>
													{errors.email}
												</motion.p>
											)}
										</AnimatePresence>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-sm font-medium text-gray-700 dark:text-zinc-100 mb-2 block">Project Details</label>
									<textarea
										rows={5}
										name="message"
										value={values.message}
										onChange={handleChange}
										onBlur={handleBlur}
										// placeholder="Tell me about your project, goals, and budget..."
										placeholder="Tell me about your project — what you want to build, key features, timeline, and budget (optional). I’ll suggest the best approach."
										className={getInputClasses('message').replace('rounded-xl', 'rounded-2xl')}
									></textarea>
									<AnimatePresence>
										{touched.message && errors.message && (
											<motion.p
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												className="!text-red-500 text-sm mt-1 font-medium"
											>
												{errors.message}
											</motion.p>
										)}
									</AnimatePresence>
								</div>

								{status === 'error' && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
									>
										<XCircle size={18} />
										{errorMessage}
									</motion.div>
								)}

								<button
									type="submit"
									disabled={status === 'loading'}
									className="cursor-pointer w-full grad-cta py-4 sm:py-5 rounded-xl sm:rounded-2xl text-white font-black text-lg sm:text-xl flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
								>
									{status === 'loading' ? (
										<motion.div
											animate={{ rotate: 360 }}
											transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
											className="flex items-center justify-center gap-2"
										>
											<AlertCircle size={20} className="sm:w-[24px] sm:h-[24px]" />
											Scheduling...
										</motion.div>
									) : (
										<>
											Get Free Consultation <Send size={20} className="sm:w-[24px] sm:h-[24px]" />
										</>
									)}
								</button>

								<p className="text-center text-xs text-zinc-500">
									By submitting, you agree to the privacy policy. No spam, ever.
								</p>
							</motion.form>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
