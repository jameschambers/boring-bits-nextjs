import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import ToastRack from '../components/ToastRack'

export default {
  title: 'Tailwind/Toast',
};

export const Default = () => {
  useEffect(() => {
    toast("Default toast");
  }, [])
  return <ToastRack />
}

export const Success = () => {
  useEffect(() => {
    toast.success("Successful toast");
  }, [])
  return <ToastRack />
}

export const Info = () => {
  useEffect(() => {
    toast.info("Info toast");
  }, [])
  return <ToastRack />
}

export const Warn = () => {
  useEffect(() => {
    toast.warn("Warning toast");
  }, [])
  return <ToastRack />
}

export const Error = () => {
  useEffect(() => {
    toast.error("Error toast");
  }, [])
  return <ToastRack />
}
