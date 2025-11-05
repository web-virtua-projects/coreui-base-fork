import { ReactNode } from 'react';
import { AppSidebar, AppFooter, AppHeader } from '@easy-message/core-ui/components';
import navigation from '@easy-message/core-ui/_nav';
import CustomAppContent from './CustomAppContent'; // Importa o novo content

interface Props {
  header?: ReactNode;
  footer?: ReactNode;
}

const CoreUILayout = ({ header, footer }: Props) => {
  return (
    <div>
      <AppSidebar navigation={navigation} />
      <div className="wrapper d-flex flex-column min-vh-100">
        {header || <AppHeader />}
        <div className="body flex-grow-1 px-3">
          <CustomAppContent />
        </div>
        {footer || <AppFooter />}
      </div>
    </div>
  );
};

export default CoreUILayout;

