import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from './sheet';
import { Button, buttonVariants } from './button';
import { cn } from '../../lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Services',
			href: '#services',
		},
		{
			label: 'Studio',
			href: '/studio',
		},
		{
			label: 'Work',
			href: '#work',
		},
		{
			label: 'Contact',
			href: '/contact',
		},
	];

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full',
				// keep space from viewport edges + a little breathing room from the top
				'px-6 py-3',
			)}
		>
			<div
				className={cn(
					'mx-auto w-full max-w-6xl rounded-lg border shadow',
					'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
				)}
			>
				<nav className="flex items-center justify-between p-1.5">
					<a href="/" className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1">
						<p className="text-base font-normal">Resizing</p>
					</a>
					<div className="flex items-center gap-2">
						<div className="hidden items-center gap-1 lg:flex">
							{links.map((link) => (
								<a
									key={link.label}
									className="inline-flex items-center justify-center whitespace-nowrap h-9 rounded-md px-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
									href={link.href}
									onClick={(e) => {
										if (link.href.startsWith('#')) {
											e.preventDefault();
											const element = document.querySelector(link.href);
											if (element) {
												const offset = 80; // Account for sticky header
												const elementPosition = element.getBoundingClientRect().top + window.scrollY;
												window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
											}
										}
									}}
								>
									{link.label}
								</a>
							))}
						</div>
						<Sheet open={open} onOpenChange={setOpen}>
							<Button
								size="icon"
								variant="outline"
								onClick={() => setOpen(!open)}
								className="lg:hidden"
							>
								<MenuIcon className="size-4" />
							</Button>
							<SheetContent
								className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
								showClose={false}
								side="left"
							>
								<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
									{links.map((link) => (
										<a
											key={link.label}
											className={buttonVariants({
												variant: 'ghost',
												className: 'justify-start cursor-pointer',
											})}
											href={link.href}
											onClick={(e) => {
												if (link.href.startsWith('#')) {
													e.preventDefault();
													setOpen(false);
													const element = document.querySelector(link.href);
													if (element) {
														const offset = 80; // Account for sticky header
														const elementPosition = element.getBoundingClientRect().top + window.scrollY;
														window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
													}
												}
											}}
										>
											{link.label}
										</a>
									))}
								</div>
								<SheetFooter>
									<Button variant="outline">Sign In</Button>
									<Button>Get Started</Button>
								</SheetFooter>
							</SheetContent>
						</Sheet>
					</div>
				</nav>
			</div>
		</header>
	);
}

