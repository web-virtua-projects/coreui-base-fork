import { Suspense, ReactNode } from 'react';
import { AppContent, AppSidebar, AppFooter } from '@easy-message/core-ui/components';
import { CContainer, CSpinner } from '@coreui/react';
import { Route, Routes } from 'react-router-dom';
import navigation from '@easy-message/core-ui/_nav';
import CustomAppHeader from './CustomAppHeader'; // Import the custom header

interface RouteType {
  path: string;
  name: string;
  element: React.ComponentType;
  exact?: boolean; // Keep for compatibility if routes object has it
}

interface Props {
  routes: RouteType[];
  header?: ReactNode;
  footer?: ReactNode;
}

const CoreUILayout = ({ routes, header, footer }: Props) => {
  return (
    <div>
      <AppSidebar navigation={navigation} />
      <div className="wrapper d-flex flex-column min-vh-100">
        {header || <CustomAppHeader />}
        <div className="body flex-grow-1 px-3">
          <AppContent>
            <Suspense fallback={<CContainer lg><CSpinner color="primary" /></CContainer>}>
              <Routes>
                {routes.map((route: RouteType, idx: number) => (
                  route.element && (
                    <Route
                      key={idx}
                      path={route.path}
                      element={<route.element />}
                    />
                  )
                ))}
              </Routes>
            </Suspense>
          </AppContent>
        </div>
        {footer || <AppFooter />}
      </div>
    </div>
  );
};

export default CoreUILayout;

