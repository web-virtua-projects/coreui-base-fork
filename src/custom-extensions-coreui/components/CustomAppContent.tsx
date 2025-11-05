import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CContainer, CSpinner } from '@coreui/react';

// routes config
import routes from '@easy-message/core-ui/routes';

const CustomAppContent = () => {
  return (
    <CContainer className="px-4 custom-content-container" xxl>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route: any, idx: number) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default CustomAppContent;
