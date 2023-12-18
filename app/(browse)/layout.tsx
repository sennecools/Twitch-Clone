import { Navbar } from './_components/navbar';
import { Sidebar } from './_components/sidebar';

const constBrowseLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<div className="flex h-full pt-20">
				<Sidebar />
				{children}
			</div>
		</>
	);
};

export default constBrowseLayout;
