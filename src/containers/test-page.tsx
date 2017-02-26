import * as React from 'react';
import Container from '../components/container';
import RegistrationModal from '../components/registration/registration-model';
interface ITestPageProps extends React.Props<any> {};

export default function TestPage (props: ITestPageProps ) {
    return (
            <div>
                <RegistrationModal
                    onSubmit={ null }
                    isPending={ null }
                    hasError={ null }
                    isVisible={ true } />
         </div> 
    );
}
