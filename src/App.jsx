import { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ThirdParties from './pages/ThirdParties';
import AddThirdParty from './pages/AddThirdParty';
import ProfilePage from './components/profile/ProfilePage';
import Settings from './pages/Settings';
import RenewalEdit from './pages/RenewalEdit';
import Placeholder from './pages/Placeholder';
import Employees from './pages/Employees';
import RiskSearch from './pages/RiskSearch';
import Dashboard from './pages/Dashboard';

const ComponentCatalog   = lazy(() => import('./pages/ComponentCatalog'));
const CompanyAdmin       = lazy(() => import('./pages/CompanyAdmin'));
const RoleDetails        = lazy(() => import('./pages/RoleDetails'));
const ProfileDocuments   = lazy(() => import('./components/profile/ProfileDocuments'));
const ProfileRiskReport  = lazy(() => import('./components/profile/ProfileRiskReport'));
const ProfileEdit            = lazy(() => import('./components/profile/ProfileEdit'));
const ProfileRiskMitigation       = lazy(() => import('./components/profile/ProfileRiskMitigation'));
const ProfileApproval             = lazy(() => import('./components/profile/ProfileApproval'));
const ProfileApprovalStage        = lazy(() => import('./components/profile/ProfileApprovalStage'));
const ProfilePlaceholder          = lazy(() => import('./components/profile/ProfilePlaceholder'));
const ProfileRiskAssessment             = lazy(() => import('./components/profile/ProfileRiskAssessment'));
const ProfileRiskAssessmentQuestionnaire = lazy(() => import('./components/profile/ProfileRiskAssessmentQuestionnaire'));
const ProfileIntegrityCheck       = lazy(() => import('./components/profile/ProfileIntegrityCheck'));
const ProfileDueDiligence         = lazy(() => import('./components/profile/ProfileDueDiligence'));
const ProfileInternalDueDiligence = lazy(() => import('./components/profile/ProfileInternalDueDiligence'));
const ProfileEnhancedDueDiligence = lazy(() => import('./components/profile/ProfileEnhancedDueDiligence'));
const ProfileUBO                        = lazy(() => import('./components/profile/ProfileUBO'));
const ProfileScreeningMonitoring        = lazy(() => import('./components/profile/ProfileScreeningMonitoring'));
const ProfileProperties                 = lazy(() => import('./components/profile/ProfileProperties'));
const ProfileEntityVerification         = lazy(() => import('./components/profile/ProfileEntityVerification'));
const ProfileAudit                      = lazy(() => import('./components/profile/ProfileAudit'));

function Loading() {
  return <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-light)', fontFamily: 'Roboto, sans-serif' }}>Loading…</div>;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/third-parties" element={<ThirdParties />} />
          <Route path="/add-third-party" element={<AddThirdParty />} />
          <Route path="/profile/:profileId" element={<ProfilePage />} />
          <Route path="/profile/:profileId/documents" element={<ProfileDocuments />} />
          <Route path="/profile/:profileId/risk-report" element={<ProfileRiskReport />} />
          <Route path="/profile/:profileId/edit" element={<ProfileEdit />} />
          <Route path="/profile/:profileId/risk-mitigation" element={<ProfileRiskMitigation />} />
          <Route path="/profile/:profileId/risk-assessment" element={<ProfileRiskAssessment />} />
          <Route path="/profile/:profileId/risk-assessment/questionnaire" element={<ProfileRiskAssessmentQuestionnaire />} />
          <Route path="/profile/:profileId/due-diligence" element={<ProfileDueDiligence />} />
          <Route path="/profile/:profileId/due-diligence/internal" element={<ProfileInternalDueDiligence />} />
          <Route path="/profile/:profileId/integrity-check" element={<ProfileIntegrityCheck />} />
          <Route path="/profile/:profileId/enhanced-due-diligence" element={<ProfileEnhancedDueDiligence />} />
          <Route path="/profile/:profileId/ubo" element={<ProfileUBO />} />
          <Route path="/profile/:profileId/approval" element={<ProfileApproval />} />
          <Route path="/profile/:profileId/approval/:stageNum" element={<ProfileApprovalStage />} />
          <Route path="/profile/:profileId/screening-monitoring" element={<ProfileScreeningMonitoring />} />
          <Route path="/profile/:profileId/properties" element={<ProfileProperties />} />
          <Route path="/profile/:profileId/entity-verification" element={<ProfileEntityVerification />} />
          <Route path="/profile/:profileId/audit" element={<ProfileAudit />} />
          <Route path="/company-admin" element={<Navigate to="/company-admin/summary" replace />} />
          <Route path="/company-admin/summary" element={<CompanyAdmin />} />
          <Route path="/company-admin/third-party-details" element={<CompanyAdmin />} />
          <Route path="/company-admin/roles" element={<CompanyAdmin />} />
          <Route path="/company-admin/roles/:roleIndex" element={<RoleDetails />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/risk-search" element={<RiskSearch />} />
          <Route path="/settings" element={<Navigate to="/settings/general/currency_approval_groups" replace />} />
          <Route path="/settings/:tab/:section" element={<Settings />} />
          <Route path="/settings/renewals/:version/edit" element={<RenewalEdit />} />
          <Route path="/reports" element={<Placeholder title="Reports" />} />
          <Route path="/component-catalog" element={<ComponentCatalog />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
