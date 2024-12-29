import { faker } from '@faker-js/faker';

const Footer = () => {
    const solutionsList = ['Book Search', 'Author Search', 'Partner with us'];
    const companyList = ['About us', 'Jobs', 'GDPR', 'Security'];
    const resourcesList = ['Blog', 'Help Center', 'Events'];
    const contactsList = [
        'email.email@email.com',
        faker.phone.number({ style: 'international' }),
        'Twitter',
        'Facebook',
        'Instagram',
    ];

    return (
        <footer
            data-testid="qa-footer"
            className="flex justify-center bg-primary p-10 text-white mt-36"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-3/5">
                <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                    <div>
                        <p className="text-lg pb-3 font-bold">Solutions</p>
                        <ul>
                            {solutionsList.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg pb-3 font-bold">Company</p>
                        <ul>
                            {companyList.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                    <div>
                        <p className="text-lg pb-3 font-bold">Resources</p>
                        <ul>
                            {resourcesList.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg pb-3 font-bold">Contacts</p>
                        <ul>
                            {contactsList.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
