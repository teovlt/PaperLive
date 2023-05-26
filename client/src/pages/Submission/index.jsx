import React, { useEffect, useState, useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import { Container, NavLink, Navigation } from '../../components/Layout/layoutElements';
import NavBar from '../../components/Navbar';
import {
  HiOutlineBookOpen,
  HiOutlineChartPie,
  HiOutlineNewspaper,
  HiOutlineTrash,
  HiOutlineArrowLeft,
} from 'react-icons/hi2';
import {
  Sidebar,
  ContributionInfosContainer,
  ContributionInfo,
  ContributionInfosLineWrapper,
  Label,
  Value,
  Table,
  TableCell,
  TableHead,
  TableFoot,
  TableRow,
  TableCellButton,
  Group,
  RelatedContributionLink,
} from '../Contributions/contributionsElements';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, IconLink, Heading2, Link, Heading3 } from '../../theme/appElements';
import { useNavigate } from 'react-router-dom';
import { useConfirm } from '../../context/ConfirmContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { toast } from 'react-toastify';

const Submission = () => {
  const { submissionId } = useParams();
  const { auth, setAuth } = useAuth();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const [submission, setSubmission] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const { confirm } = useConfirm();

  const notifySave = () => {
    toast.success(t('toast.contributionUpdatedSuccess'), {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const notifyDelete = () => {
    toast.success(t('toast.contributionDeletedSuccess'), {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  useEffect(() => {
    setSubmission(
      auth.contributions
        ?.find((contribution) =>
          contribution.submissions?.find((submission) => submission._id.toString() === submissionId)
        )
        .submissions?.find((submission) => submission._id.toString() === submissionId)
    );
  }, [submissionId]);

  const handleConfirmation = async () => {};

  async function handleSaveChanges() {}

  function handleCancelChanges() {}

  const handleDownload = async (e) => {};

  return (
    <>
      <NavBar />
      <Container>
        {!isEditing ? (
          <IconLink onClick={() => navigate(-1)}>
            <HiOutlineArrowLeft /> {t('global.back')}
          </IconLink>
        ) : (
          <IconLink onClick={() => setIsEditing(false)}>
            <HiOutlineArrowLeft /> {t('global.back')}
          </IconLink>
        )}
        <Navigation>
          <NavLink to='/'>
            <HiOutlineBookOpen />
            {t('layout.overview')}
          </NavLink>
          <NavLink to='/contributions'>
            <HiOutlineNewspaper />
            {t('global.contributions')}
          </NavLink>
          <NavLink to='/statistics'>
            <HiOutlineChartPie />
            {t('layout.statistics')}
          </NavLink>
        </Navigation>
        <Sidebar>
          <Heading2>{t('contribution.actions')}</Heading2>

          <Button secondary onClick={() => console.log('stats')}>
            {t('contribution.stats')}
          </Button>
          {!isEditing && (
            <Button secondary onClick={() => setIsEditing(true)}>
              edit the submission
            </Button>
          )}
          <Button
            secondary
            type='negative'
            onClick={handleConfirmation}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: '8px',
            }}>
            supprimer la submission
            <HiOutlineTrash />
          </Button>
        </Sidebar>
        <ContributionInfosContainer>
          <Heading2>{t('contribution.informations')}</Heading2>
          {!isEditing ? (
            <>
              <p>{submission ? submission?.title : 'aucune soumission detecté'}</p>
            </>
          ) : (
            <>
              <p>en mode edit</p>
            </>
          )}
        </ContributionInfosContainer>
      </Container>
    </>
  );
};

export default Submission;
