import { render, screen } from '@testing-library/react';
import PatientListPage from './index';
import {Patient, Gender} from "./../../types";
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

test('renders content', () => {

    const setPatientsList = vi.fn();

    const patientsList: Patient[] = [
        {
            id: "123",
            name: "Maija the Great",
            occupation: "Tester",
            gender: Gender.Female,
            entries: []
        },
        {
            id: "124",
            name: "Testing name",
            occupation: "Coder",
            gender: Gender.Other,
            entries: []
        }
    ];

    render(    
        <BrowserRouter>
            <PatientListPage patients={patientsList} setPatients={setPatientsList} />
        </BrowserRouter>);
    expect(screen.getByText('Maija the Great')).toBeVisible();
    expect(screen.getByText('Tester')).toBeVisible();
    expect(screen.getByText('female')).toBeVisible();
    expect(screen.getByText('Testing name')).toBeVisible();
    expect(screen.getByText('Coder')).toBeVisible();
    expect(screen.getByText('other')).toBeVisible();

});