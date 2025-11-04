import React, { Suspense } from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '@easy-message/core-ui/components';
import { CContainer, CSpinner } from '@coreui/react';
import { Route, Routes } from 'react-router-dom';
import navigation from '@easy-message/core-ui/_nav';

const CoreUILayout = ({ routes, header, footer }) => {
  return (
    <div>
      <AppSidebar navigation={navigation} />
      <div className="wrapper d-flex flex-column min-vh-100">
        {header || <AppHeader />}
        <div className="body flex-grow-1 px-3">
          <AppContent>
            <Suspense fallback={<CContainer lg><CSpinner color="primary" /></CContainer>}>
              <Routes>
                {routes.map((route, idx) => (
                  route.element && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
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

